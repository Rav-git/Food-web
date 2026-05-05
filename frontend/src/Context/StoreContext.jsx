import { createContext, useEffect, useState } from "react";
import { food_list as initialProductList, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "https://food-web-backend-snpb.onrender.com"
    const [food_list] = useState(initialProductList);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [wishlist, setWishlist] = useState(new Set())
    const currency = "₹";
    const deliveryCharge = 99;

    const toggleWishlist = (itemId) => {
        setWishlist(prev => {
            const next = new Set(prev);
            if (next.has(itemId)) next.delete(itemId);
            else next.add(itemId);
            return next;
        });
    }

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
                if (cartItems[item] > 0) {
                    let itemInfo = food_list.find((product) => product._id === item);
                    totalAmount += itemInfo.price * cartItems[item];
                }
            } catch (error) {
            }
        }
        return totalAmount;
    }

    const getTotalCartCount = () => {
        return Object.values(cartItems).reduce((sum, qty) => sum + (qty > 0 ? qty : 0), 0);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartCount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
        searchTerm,
        setSearchTerm,
        wishlist,
        toggleWishlist
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
