import basket_icon from './basket_icon.png'
import logo from './logo.png'
import search_icon from './search_icon.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import checked from './checked.png'
import un_checked from './un_checked.png'

export const assets = {
    logo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    checked,
    un_checked
}

const UNS = (id, w = 400, h = 500) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const CLOTH_SIZES = ["S", "M", "L", "XL", "XXL"]
const KIDS_SIZES = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"]
const SHOE_SIZES = ["5", "6", "7", "8", "9", "10", "11"]
const KIDS_SHOE = ["1", "2", "3", "4", "5"]

export const menu_list = [
    {
        menu_name: "Men's Wear",
        menu_image: UNS("1507679799987-c73779587ccf", 100, 100)
    },
    {
        menu_name: "Women's Wear",
        menu_image: UNS("1515886657613-9f3515b0c78f", 100, 100)
    },
    {
        menu_name: "Kids' Collection",
        menu_image: UNS("1622290291468-a28f7a7dc6a8", 100, 100)
    },
    {
        menu_name: "Footwear",
        menu_image: UNS("1542291026-7eec264c27ff", 100, 100)
    },
    {
        menu_name: "Accessories",
        menu_image: UNS("1523275335684-37898b6baf30", 100, 100)
    },
    {
        menu_name: "Ethnic Wear",
        menu_image: UNS("1657367144068-935d1d9e5e15", 100, 100)
    }
]

export const food_list = [
    // ── Men's Wear ────────────────────────────────────────────────────────────
    {
        _id: "1",
        name: "Classic Slim Fit Polo",
        image: UNS("1521572163474-6864f9cf17ab"),
        price: 899,
        description: "Premium quality slim fit polo shirt in 100% breathable cotton. Perfect for smart-casual outings and everyday wear.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "2",
        name: "Premium Cotton Jacket",
        image: UNS("1551028719-00167b16eac5"),
        price: 2499,
        description: "Stylish cotton jacket with zip closure and multiple pockets. Modern cut suitable for all seasons.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "3",
        name: "Casual Slim Fit Chinos",
        image: UNS("1624378439575-d8705ad7ae80"),
        price: 1299,
        description: "Classic slim fit chinos in high-quality stretch fabric. Versatile style from office to weekend outings.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 1699
    },
    {
        _id: "4",
        name: "Graphic Print T-Shirt",
        image: UNS("1576566588028-4147f3842f27"),
        price: 699,
        description: "Trendy graphic print round-neck t-shirt in pure combed cotton. Comfortable and stylish for everyday casual wear.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "5",
        name: "Oxford Formal Shirt",
        image: UNS("1602810318383-e386cc2a3ccf"),
        price: 1199,
        description: "Crisp Oxford weave formal shirt with a classic collar and chest pocket. Ideal for office and formal occasions.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    // ── Women's Wear ──────────────────────────────────────────────────────────
    {
        _id: "6",
        name: "Floral Wrap Dress",
        image: UNS("1595777457583-95e059d581b8"),
        price: 1799,
        description: "Beautiful floral print wrap dress with tie-waist detail. Perfect for parties, brunch, and casual day-outs.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "7",
        name: "Zip-Up Hoodie Jacket",
        image: UNS("1548549557-dbe9946621da"),
        price: 2299,
        description: "Comfortable zip-up hoodie jacket in soft cotton blend. Features an adjustable hood and front kangaroo pocket.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: true,
        originalPrice: 2999
    },
    {
        _id: "8",
        name: "Elegant Evening Gown",
        image: UNS("1515886657613-9f3515b0c78f"),
        price: 3499,
        description: "Graceful evening gown in premium satin fabric. Flattering silhouette perfect for weddings and formal events.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "9",
        name: "Solid Slim Fit T-Shirt",
        image: UNS("1503341504253-dff4815485f1"),
        price: 699,
        description: "Solid colour slim fit t-shirt in premium combed cotton. Lightweight and breathable for all-day comfort.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "10",
        name: "Cotton Casual Blouse",
        image: UNS("1509631179647-0177331693ae"),
        price: 849,
        description: "Soft cotton casual blouse with an elegant drape. Pairs perfectly with trousers, skirts, or denim.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: true,
        originalPrice: 1199
    },
    {
        _id: "11",
        name: "Smart Casual Midi Dress",
        image: UNS("1469334031218-e382a71b716b"),
        price: 2199,
        description: "Chic midi dress in breathable fabric. Versatile design suited for office, dates, and weekend outings.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    // ── Kids' Collection ──────────────────────────────────────────────────────
    {
        _id: "12",
        name: "Boys Denim Outfit Set",
        image: UNS("1519457431-44ccd64a579b"),
        price: 899,
        description: "Stylish denim shirt and jeans combo for boys. Durable, soft, and comfortable for active kids.",
        category: "Kids' Collection",
        sizes: KIDS_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "13",
        name: "Girls Floral Frock",
        image: UNS("1518831959646-742c3a14ebf7"),
        price: 799,
        description: "Pretty floral print frock for girls with bow waist detail. Soft fabric that is gentle on skin. Machine washable.",
        category: "Kids' Collection",
        sizes: KIDS_SIZES,
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "14",
        name: "Kids Graphic Tee + Joggers",
        image: UNS("1622290291468-a28f7a7dc6a8"),
        price: 599,
        description: "Fun graphic tee paired with comfortable elastic-waist jogger pants. Made from soft 100% cotton.",
        category: "Kids' Collection",
        sizes: KIDS_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 799
    },
    {
        _id: "15",
        name: "Kids Winter Tracksuit",
        image: UNS("1503454537195-1dcabb73ffb9"),
        price: 1299,
        description: "Warm and cozy winter tracksuit with fleece lining. Keeps children comfortable through colder months.",
        category: "Kids' Collection",
        sizes: KIDS_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    // ── Footwear ──────────────────────────────────────────────────────────────
    {
        _id: "16",
        name: "Men's Leather Loafers",
        image: UNS("1549298916-b41d501d3772"),
        price: 2499,
        description: "Classic genuine leather loafers with cushioned insole. Versatile style for office and casual occasions.",
        category: "Footwear",
        sizes: SHOE_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "17",
        name: "Women's Block Heel Sandals",
        image: UNS("1543163521-1bf539c55dd2"),
        price: 1999,
        description: "Elegant block heel sandals with ankle strap closure. Stylish and comfortable for all-day wear.",
        category: "Footwear",
        sizes: ["3", "4", "5", "6", "7", "8"],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "18",
        name: "Unisex Canvas Sneakers",
        image: UNS("1542291026-7eec264c27ff"),
        price: 1499,
        description: "Trendy canvas sneakers with rubber sole and lace-up closure. Available in multiple colours.",
        category: "Footwear",
        sizes: SHOE_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 1999
    },
    {
        _id: "19",
        name: "Men's Sports Running Shoes",
        image: UNS("1560343090-f0409e92791a"),
        price: 3499,
        description: "High-performance running shoes with advanced cushioning and breathable mesh upper. Ideal for daily training.",
        category: "Footwear",
        sizes: SHOE_SIZES,
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "20",
        name: "Kids Velcro School Shoes",
        image: UNS("1575537302964-96cd47c06b1b"),
        price: 799,
        description: "Sturdy school shoes with easy velcro strap closure. Durable leather-look upper with cushioned sole.",
        category: "Footwear",
        sizes: KIDS_SHOE,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    // ── Accessories ───────────────────────────────────────────────────────────
    {
        _id: "21",
        name: "Pack of 5 Cotton Ankle Socks",
        image: UNS("1640026199235-c24aa417b552"),
        price: 39,
        description: "Soft cotton ankle-length socks in assorted colours. Breathable, anti-odour, and comfortable for everyday use.",
        category: "Accessories",
        sizes: ["Free Size"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "22",
        name: "Men's Canvas Belt",
        image: UNS("1705493655920-20c572928501"),
        price: 149,
        description: "Durable canvas belt with a sturdy metal buckle. Casual and sporty — pairs well with chinos, jeans, and shorts.",
        category: "Accessories",
        sizes: ["28", "30", "32", "34", "36", "38"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "23",
        name: "Women's Hair Accessories Kit",
        image: UNS("1535632066927-ab7c9ab60908"),
        price: 99,
        description: "Set of hair clips, scrunchies, and pins in assorted colours and styles. Perfect for everyday hairstyling.",
        category: "Accessories",
        sizes: ["Free Size"],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "24",
        name: "Aviator Sunglasses",
        image: UNS("1572635196237-14b3f281503f"),
        price: 1499,
        description: "Classic aviator sunglasses with UV400 polarised lenses. Lightweight metal frame in timeless gold finish.",
        category: "Accessories",
        sizes: ["Free Size"],
        isNew: false,
        isSale: true,
        originalPrice: 1999
    },
    {
        _id: "25",
        name: "Classic Leather Tote Bag",
        image: UNS("1548036328-c9fa89d128fa"),
        price: 2499,
        description: "Spacious and stylish leather tote bag with multiple compartments. Perfect for work, travel, and daily use.",
        category: "Accessories",
        sizes: [],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    // ── Ethnic Wear ───────────────────────────────────────────────────────────
    {
        _id: "26",
        name: "Men's Kurta Pyjama Set",
        image: UNS("1628250521470-28c1fc54616c"),
        price: 1499,
        description: "Traditional yet contemporary kurta pyjama set in premium cotton. Ideal for festivals and celebrations.",
        category: "Ethnic Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "27",
        name: "Embroidered Anarkali Kurti",
        image: UNS("1741847639057-b51a25d42892"),
        price: 1299,
        description: "Beautifully embroidered Anarkali-style kurti in soft georgette. Flattering A-line silhouette for all body types.",
        category: "Ethnic Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "28",
        name: "Bridal Lehenga Choli",
        image: UNS("1550614000-4895a10e1bfd"),
        price: 8999,
        description: "Opulent bridal lehenga choli with heavy embroidery and zari work. Comes with a matching dupatta.",
        category: "Ethnic Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "29",
        name: "Men's Wedding Sherwani",
        image: UNS("1600586634514-0d856b8d187b"),
        price: 7999,
        description: "Regal wedding sherwani with intricate thread embroidery. Comes with matching churidar and pocket square.",
        category: "Ethnic Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "30",
        name: "Printed Palazzo Suit Set",
        image: UNS("1695231081377-2765f838043d"),
        price: 1799,
        description: "Flowy printed palazzo suit set with a straight kurta and wide-leg palazzos. Comfortable and elegant.",
        category: "Ethnic Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: true,
        originalPrice: 2299
    },
    // ── Men's Basics & Essentials ─────────────────────────────────────────────
    {
        _id: "31",
        name: "Plain White Round Neck T-Shirt",
        image: UNS("1581655353564-df123a1eb820"),
        price: 99,
        description: "Everyday plain white round-neck t-shirt in soft cotton. A wardrobe staple — perfect under shirts or worn solo.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 199
    },
    {
        _id: "32",
        name: "Men's Cotton Brief (Pack of 2)",
        image: UNS("1601393709771-3938c63d41a6"),
        price: 80,
        description: "Comfortable cotton briefs with elastic waistband. Soft, breathable, and durable for everyday wear.",
        category: "Men's Wear",
        sizes: ["S", "M", "L", "XL"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "33",
        name: "Men's Sleeveless Vest / Baniyan (Pack of 2)",
        image: UNS("1656587132121-aaccc57589cf"),
        price: 100,
        description: "100% cotton sleeveless vest (baniyan) for everyday use. Keeps you cool and comfortable through the day.",
        category: "Men's Wear",
        sizes: ["S", "M", "L", "XL"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "34",
        name: "Men's Cotton Boxer Shorts",
        image: UNS("1617951907145-53f6eb87a3a3"),
        price: 149,
        description: "Relaxed-fit cotton boxer shorts with elastic waistband. Ideal for sleeping, lounging, or under trousers.",
        category: "Men's Wear",
        sizes: ["S", "M", "L", "XL"],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "35",
        name: "Men's Rubber Flip Flops",
        image: UNS("1692536631218-ce4264088abe"),
        price: 99,
        description: "Lightweight rubber flip flops with non-slip sole. Easy to slip on, comfortable for home, beach, and casual outings.",
        category: "Footwear",
        sizes: ["6", "7", "8", "9", "10", "11"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "36",
        name: "Women's Plain Cotton Leggings",
        image: UNS("1618355281951-a174b87198e2"),
        price: 199,
        description: "Comfortable 4-way stretch cotton leggings with wide waistband. Available in black, navy, and grey.",
        category: "Women's Wear",
        sizes: ["XS", "S", "M", "L", "XL"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "37",
        name: "Kids Plain Cotton T-Shirt",
        image: UNS("1620905385976-9f191e837efd"),
        price: 129,
        description: "Soft 100% cotton round-neck t-shirt for kids. Easy to wash, durable colours, and comfortable all day.",
        category: "Kids' Collection",
        sizes: KIDS_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 199
    },
    {
        _id: "38",
        name: "Women's Budget Cotton Kurti",
        image: UNS("1597983073750-16f5ded1321f"),
        price: 249,
        description: "Simple and elegant cotton kurti in solid colours. Lightweight, breathable, and perfect for daily casual wear.",
        category: "Ethnic Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    // ── More Men's Basics ─────────────────────────────────────────────────────
    {
        _id: "39",
        name: "Men's Cotton Track Pants",
        image: UNS("1559962493-86e9d4fc7fee"),
        price: 249,
        description: "Comfortable elastic-waist cotton track pants with two side pockets. Great for jogging, gym, and daily casual wear.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 399
    },
    {
        _id: "40",
        name: "Men's Sports Shorts",
        image: UNS("1602190420103-683df5093e86"),
        price: 199,
        description: "Lightweight quick-dry sports shorts with elastic waistband and drawstring. Ideal for gym, running, and outdoor activity.",
        category: "Men's Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    // ── More Women's Basics ───────────────────────────────────────────────────
    {
        _id: "41",
        name: "Women's Printed Cotton Kurti",
        image: UNS("1597983073540-684a10b15ab1"),
        price: 349,
        description: "Stylish floral and geometric print cotton kurti. Relaxed fit, breathable fabric — perfect for everyday casual and semi-formal occasions.",
        category: "Ethnic Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "42",
        name: "Women's Cotton Palazzo Pants",
        image: UNS("1704775989090-452868cbeb75"),
        price: 299,
        description: "Flowy wide-leg palazzo pants in soft cotton blend. Pairs beautifully with kurtis, tops, and tunics. Available in solid and printed patterns.",
        category: "Women's Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: false,
        isSale: true,
        originalPrice: 499
    },
    // ── More Kids' Basics ─────────────────────────────────────────────────────
    {
        _id: "43",
        name: "Kids Cotton Shorts (Pack of 2)",
        image: UNS("1627859774205-83c1279a6382"),
        price: 149,
        description: "Comfortable elastic-waist cotton shorts for kids. Soft, durable, and easy to wash — available in fun solid colours.",
        category: "Kids' Collection",
        sizes: KIDS_SIZES,
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "44",
        name: "Kids School Socks (Pack of 3)",
        image: UNS("1615486364462-ef6363adbc18"),
        price: 59,
        description: "Soft cotton school socks in white — ideal for daily school use. Anti-odour, reinforced toe and heel for durability.",
        category: "Accessories",
        sizes: ["Free Size"],
        isNew: false,
        isSale: false,
        originalPrice: null
    },
    // ── More Ethnic Wear ──────────────────────────────────────────────────────
    {
        _id: "45",
        name: "Women's Ethnic Kurti with Palazzo Set",
        image: UNS("1667665970124-2273c6ef3489"),
        price: 599,
        description: "Coordinated ethnic set — printed kurti paired with matching palazzo pants. Festive yet comfortable for parties and casual outings.",
        category: "Ethnic Wear",
        sizes: ["XS", ...CLOTH_SIZES],
        isNew: true,
        isSale: false,
        originalPrice: null
    },
    {
        _id: "46",
        name: "Men's Cotton Pathani Kurta",
        image: UNS("1701365676249-9d7ab5022dec"),
        price: 799,
        description: "Classic Pathani-style kurta in soft cotton with a chest pocket and button placket. Comfortable and elegant for festive occasions.",
        category: "Ethnic Wear",
        sizes: CLOTH_SIZES,
        isNew: false,
        isSale: true,
        originalPrice: 999
    }
]
