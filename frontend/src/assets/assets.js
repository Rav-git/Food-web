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
        menu_image: UNS("1568702846914-96b305d2aaeb", 100, 100)
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
        category: "Men's Wear"
    },
    {
        _id: "2",
        name: "Premium Cotton Jacket",
        image: UNS("1551028719-00167b16eac5"),
        price: 2499,
        description: "Stylish cotton jacket with zip closure and multiple pockets. Modern cut suitable for all seasons.",
        category: "Men's Wear"
    },
    {
        _id: "3",
        name: "Casual Slim Fit Chinos",
        image: UNS("1624378439575-d8705ad7ae80"),
        price: 1299,
        description: "Classic slim fit chinos in high-quality stretch fabric. Versatile style from office to weekend outings.",
        category: "Men's Wear"
    },
    {
        _id: "4",
        name: "Graphic Print T-Shirt",
        image: UNS("1576566588028-4147f3842f27"),
        price: 699,
        description: "Trendy graphic print round-neck t-shirt in pure combed cotton. Comfortable and stylish for everyday casual wear.",
        category: "Men's Wear"
    },
    {
        _id: "5",
        name: "Oxford Formal Shirt",
        image: UNS("1602810318383-e386cc2a3ccf"),
        price: 1199,
        description: "Crisp Oxford weave formal shirt with a classic collar and chest pocket. Ideal for office and formal occasions.",
        category: "Men's Wear"
    },
    // ── Women's Wear ──────────────────────────────────────────────────────────
    {
        _id: "6",
        name: "Floral Wrap Dress",
        image: UNS("1595777457583-95e059d581b8"),
        price: 1799,
        description: "Beautiful floral print wrap dress with tie-waist detail. Perfect for parties, brunch, and casual day-outs.",
        category: "Women's Wear"
    },
    {
        _id: "7",
        name: "Zip-Up Hoodie Jacket",
        image: UNS("1548549557-dbe9946621da"),
        price: 2299,
        description: "Comfortable zip-up hoodie jacket in soft cotton blend. Features an adjustable hood and front kangaroo pocket.",
        category: "Women's Wear"
    },
    {
        _id: "8",
        name: "Elegant Evening Gown",
        image: UNS("1515886657613-9f3515b0c78f"),
        price: 3499,
        description: "Graceful evening gown in premium satin fabric. Flattering silhouette perfect for weddings and formal events.",
        category: "Women's Wear"
    },
    {
        _id: "9",
        name: "Solid Slim Fit T-Shirt",
        image: UNS("1503341504253-dff4815485f1"),
        price: 699,
        description: "Solid colour slim fit t-shirt in premium combed cotton. Lightweight and breathable for all-day comfort.",
        category: "Women's Wear"
    },
    {
        _id: "10",
        name: "Cotton Casual Blouse",
        image: UNS("1509631179647-0177331693ae"),
        price: 849,
        description: "Soft cotton casual blouse with an elegant drape. Pairs perfectly with trousers, skirts, or denim.",
        category: "Women's Wear"
    },
    {
        _id: "11",
        name: "Smart Casual Midi Dress",
        image: UNS("1469334031218-e382a71b716b"),
        price: 2199,
        description: "Chic midi dress in breathable fabric. Versatile design suited for office, dates, and weekend outings.",
        category: "Women's Wear"
    },
    // ── Kids' Collection ──────────────────────────────────────────────────────
    {
        _id: "12",
        name: "Boys Denim Outfit Set",
        image: UNS("1519457431-44ccd64a579b"),
        price: 899,
        description: "Stylish denim shirt and jeans combo for boys. Durable, soft, and comfortable for active kids.",
        category: "Kids' Collection"
    },
    {
        _id: "13",
        name: "Girls Floral Frock",
        image: UNS("1518831959646-742c3a14ebf7"),
        price: 799,
        description: "Pretty floral print frock for girls with bow waist detail. Soft fabric that is gentle on skin. Machine washable.",
        category: "Kids' Collection"
    },
    {
        _id: "14",
        name: "Kids Graphic Tee + Joggers",
        image: UNS("1622290291468-a28f7a7dc6a8"),
        price: 599,
        description: "Fun graphic tee paired with comfortable elastic-waist jogger pants. Made from soft 100% cotton.",
        category: "Kids' Collection"
    },
    {
        _id: "15",
        name: "Kids Winter Tracksuit",
        image: UNS("1503454537195-1dcabb73ffb9"),
        price: 1299,
        description: "Warm and cozy winter tracksuit with fleece lining. Keeps children comfortable through colder months.",
        category: "Kids' Collection"
    },
    // ── Footwear ──────────────────────────────────────────────────────────────
    {
        _id: "16",
        name: "Men's Leather Loafers",
        image: UNS("1549298916-b41d501d3772"),
        price: 2499,
        description: "Classic genuine leather loafers with cushioned insole. Versatile style for office and casual occasions.",
        category: "Footwear"
    },
    {
        _id: "17",
        name: "Women's Block Heel Sandals",
        image: UNS("1543163521-1bf539c55dd2"),
        price: 1999,
        description: "Elegant block heel sandals with ankle strap closure. Stylish and comfortable for all-day wear.",
        category: "Footwear"
    },
    {
        _id: "18",
        name: "Unisex Canvas Sneakers",
        image: UNS("1542291026-7eec264c27ff"),
        price: 1499,
        description: "Trendy canvas sneakers with rubber sole and lace-up closure. Available in multiple colours.",
        category: "Footwear"
    },
    {
        _id: "19",
        name: "Men's Sports Running Shoes",
        image: UNS("1560343090-f0409e92791a"),
        price: 3499,
        description: "High-performance running shoes with advanced cushioning and breathable mesh upper. Ideal for daily training.",
        category: "Footwear"
    },
    {
        _id: "20",
        name: "Kids Velcro School Shoes",
        image: UNS("1575537302964-96cd47c06b1b"),
        price: 799,
        description: "Sturdy school shoes with easy velcro strap closure. Durable leather-look upper with cushioned sole.",
        category: "Footwear"
    },
    // ── Accessories ───────────────────────────────────────────────────────────
    {
        _id: "21",
        name: "Gold Statement Necklace",
        image: UNS("1515562141207-7a88fb7ce338"),
        price: 3999,
        description: "Stunning gold-plated statement necklace with intricate design. A bold piece for special occasions.",
        category: "Accessories"
    },
    {
        _id: "22",
        name: "Diamond Solitaire Ring",
        image: UNS("1606760227091-3dd870d97f1d"),
        price: 12999,
        description: "Elegant solitaire ring in solid 14K gold with a genuine diamond centre stone. A timeless heirloom design.",
        category: "Accessories"
    },
    {
        _id: "23",
        name: "Stud Earrings Set",
        image: UNS("1535632066927-ab7c9ab60908"),
        price: 2999,
        description: "Delicate stud earrings in rose gold finish with cubic zirconia stones. Lightweight and hypoallergenic.",
        category: "Accessories"
    },
    {
        _id: "24",
        name: "Aviator Sunglasses",
        image: UNS("1572635196237-14b3f281503f"),
        price: 1499,
        description: "Classic aviator sunglasses with UV400 polarised lenses. Lightweight metal frame in timeless gold finish.",
        category: "Accessories"
    },
    {
        _id: "25",
        name: "Classic Leather Tote Bag",
        image: UNS("1548036328-c9fa89d128fa"),
        price: 2499,
        description: "Spacious and stylish leather tote bag with multiple compartments. Perfect for work, travel, and daily use.",
        category: "Accessories"
    },
    // ── Ethnic Wear ───────────────────────────────────────────────────────────
    {
        _id: "26",
        name: "Men's Kurta Pyjama Set",
        image: UNS("1568702846914-96b305d2aaeb"),
        price: 1499,
        description: "Traditional yet contemporary kurta pyjama set in premium cotton. Ideal for festivals and celebrations.",
        category: "Ethnic Wear"
    },
    {
        _id: "27",
        name: "Embroidered Anarkali Kurti",
        image: UNS("1583743814966-8936f5b7be1a"),
        price: 1299,
        description: "Beautifully embroidered Anarkali-style kurti in soft georgette. Flattering A-line silhouette for all body types.",
        category: "Ethnic Wear"
    },
    {
        _id: "28",
        name: "Bridal Lehenga Choli",
        image: UNS("1550614000-4895a10e1bfd"),
        price: 8999,
        description: "Opulent bridal lehenga choli with heavy embroidery and zari work. Comes with a matching dupatta.",
        category: "Ethnic Wear"
    },
    {
        _id: "29",
        name: "Men's Wedding Sherwani",
        image: UNS("1507679799987-c73779587ccf"),
        price: 7999,
        description: "Regal wedding sherwani with intricate thread embroidery. Comes with matching churidar and pocket square.",
        category: "Ethnic Wear"
    },
    {
        _id: "30",
        name: "Printed Palazzo Suit Set",
        image: UNS("1496747611176-843222e1e57c"),
        price: 1799,
        description: "Flowy printed palazzo suit set with a straight kurta and wide-leg palazzos. Comfortable and elegant.",
        category: "Ethnic Wear"
    }
]
