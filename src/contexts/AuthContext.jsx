import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlistCount, setWishlistCount] = useState([]);
    const [cartCount, setCartCount] = useState([]);

    const refreshWishlistCount = async (usr) => {
        try {
            const data = new FormData();
            data.append('user_id', usr.id);
            const response = await axios.post(
                'http://localhost/fetchWishlistCount.php',
                data
            );
            console.log(response.data);
            if (!response.data.error) {
                setWishlistCount(parseInt(response.data["COUNT"]));
            } else {
                console.error("Failed to refresh wishlist count :", response.data);
            }
        } catch (err) {
            console.error('Error refreshing wishlist count :', err);
        }
    };

    const refreshCartCount = async (usr) => {
        try {
            const data = new FormData();
            data.append('user_id', usr.id);
            const response = await axios.post(
                'http://localhost/fetchCartCount.php',
                data
            );
            console.log(response.data);
            if (!response.data.error) {
                setCartCount(parseInt(response.data["COUNT"]));
            } else {
                console.error("Failed to refresh cart count :", response.data);
            }
        } catch (err) {
            console.error('Error refreshing cart count :', err);
        }
    };

    const updateQuantity = async(product , newQty) => {

        const updatedCart = cart.map((item) => {
            if (item.PRD_ID === product.PRD_ID && item.SHP_ID === product.SHP_ID) {
                return { ...item, QUANTITY: newQty };
            }
            return item;
        });

        const Data = new FormData();
        Data.append('prd_id', product.PRD_ID);
        Data.append('shp_id', product.SHP_ID);
        Data.append('quantity', newQty);
        Data.append('user_id',  user.id);

        try{
            const response = await axios.post('http://localhost/updateCart.php', Data);
        } catch (error) {
            console.error("Error updating cart", error);
        } finally{
            console.log("Updated cart items:", updatedCart);
            setCart(updatedCart)
        }
    };

    const AddToCart = async (product) => {
        const Data = new FormData();
        Data.append('prd_id', product.PRD_ID);
        Data.append('shp_id', product.SHP_ID);
        Data.append('quantity', 1);
        Data.append('user_id',  user.id);

        try {
            const response = await axios.post('http://localhost/addToCart.php', Data );
        } catch (error) {
            console.error("Error adding to cart", error);
        }finally{
            setCartCount(cartCount + 1);
        }
    }

    const handleAddToCartButton = async (product) => {
        const Data = new FormData();
        Data.append('prd_id', product.PRD_ID);
        Data.append('shp_id', product.SHP_ID);
        Data.append('user_id',  user.id);

        try {
            const response = await axios.post('http://localhost/isInCart.php', Data );
            if(response.data.success === true){
                updateQuantity(product, parseInt(response.data.quantity)+1);
            }else if(response.data.success === false){
                AddToCart(product);
            }else{
                console.error("Unexpected response from server:", response.data);
            }
        } catch (error) {
            console.error("Error checking cart for element", error);
        }
    }

    const AddToWishlist = async (product) => {
        const Data = new FormData();
        Data.append('prd_id', product.PRD_ID);
        Data.append('user_id', user.id);

        try {
            const response = await axios.post('http://localhost/addToWishlist.php', Data );
            console.log(response.data);
        } catch (error) {
            console.error("Error adding to wishlist", error);
        } finally{
            setWishlistCount(wishlistCount + 1);
        }
    }

    const handleAddToWishlistButton = async (product) => {
        const Data = new FormData();
        Data.append('prd_id', product.PRD_ID);
        Data.append('user_id',  user.id);

        try {
            const response = await axios.post('http://localhost/isInWishlist.php', Data );
            if(response.data.success === false){
                AddToWishlist(product);
            }else if(response.data.success === true){
                console.log("Element already in wishlist");
            }else{
                console.error("Unexpected response from server:", response.data);
            }
        } catch (error) {
            console.error("Error checking wishlist for element", error);
        }
    }

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.post(
                    'http://localhost/signedin.php',
                    {},
                    { withCredentials: true }
                );
                if (response.data.signedIn) {
                    setUser(response.data.user);
                    refreshWishlistCount(response.data.user);
                    refreshCartCount(response.data.user);
                }else if (response.data.signedIn === false) {
                    console.log('no user session');
                }else {
                    console.log("Unexpected response:", response.data);
                }
            } catch (err) {
                console.error('Session check failed:', err);
            }
        };

        checkSession();
    }, []);

    useEffect(() => {
        refreshWishlistCount(user);
        refreshCartCount(user);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser, wishlist, setWishlist, cart, setCart, wishlistCount, setWishlistCount, cartCount, setCartCount, handleAddToCartButton, updateQuantity, handleAddToWishlistButton }}>
            {children}
        </AuthContext.Provider>
    );
};