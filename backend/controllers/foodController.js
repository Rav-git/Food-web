import foodModel from "../models/foodModel.js";
import fs from 'fs'
import validator from "validator";
import { createClient } from 'redis';
import sharp from 'sharp';
import { encode } from 'blurhash';

const client = createClient({
    url: process.env.REDIS_URL
});

client.on('error', (err) => console.log('Redis Client Error', err));

// Connect to redis
(async () => {
    try {
        await client.connect();
    } catch (e) {
        console.log("Redis connection failed", e);
    }
})();

// all food list
const listFood = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const cacheKey = `foods:${page}:${limit}`;

        try {
            const cachedData = await client.get(cacheKey);
            if (cachedData) {
                return res.json({
                    success: true,
                    data: JSON.parse(cachedData),
                    pagination: {
                        current_page: page,
                        per_page: limit,
                        source: 'cache'
                    }
                })
            }
        } catch (e) {
            console.log("Redis get error", e);
        }

        const foods = await foodModel.find({}).skip(skip).limit(limit);
        const total = await foodModel.countDocuments({});

        const response = {
            success: true,
            data: foods,
            pagination: {
                current_page: page,
                total_pages: Math.ceil(total / limit),
                total_items: total,
                per_page: limit
            }
        };

        try {
            await client.set(cacheKey, JSON.stringify(foods), {
                EX: 60 // Cache for 60 seconds
            });
        } catch (e) {
            console.log("Redis set error", e);
        }

        res.json(response)
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addFood = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const { name, description, price, category } = req.body;

        // Validation
        if (validator.isEmpty(name)) {
            return res.json({ success: false, message: "Name is required" })
        }
        if (validator.isEmpty(description)) {
            return res.json({ success: false, message: "Description is required" })
        }
        if (!validator.isNumeric(String(price))) {
            return res.json({ success: false, message: "Price must be a number" })
        }
        if (validator.isEmpty(category)) {
            return res.json({ success: false, message: "Category is required" })
        }

        // Generate BlurHash
        let blurhash = "";
        try {
            const imagePath = req.file.path;
            const { data, info } = await sharp(imagePath)
                .raw()
                .ensureAlpha()
                .resize(32, 32, { fit: 'inside' })
                .toBuffer({ resolveWithObject: true });

            blurhash = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
        } catch (error) {
            console.error("BlurHash generation failed:", error);
        }

        const food = new foodModel({
            name: name,
            description: description,
            price: price,
            category: category,
            image: image_filename,
            blurhash: blurhash
        })

        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listFood, addFood, removeFood }