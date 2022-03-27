import { createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //If found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem);
    }
    
    //product not found, append quantity attribute
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    //If found, increment quantity
    if (existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id)
    }
    
    //product not found, append quantity attribute
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem);
}

const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemToCart: () => {},
    cartTotal: 0,
    cartCount: 0,
})

export const DropdownProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const  [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, item) => (
            acc + item.quantity
        ), 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((acc, item) => (
            acc + item.quantity * item.price
        ), 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemToCart = (cartItemToClear) => {
        setCartItems(clearItemFromCart(cartItems, cartItemToClear));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemToCart, cartItems, cartCount, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}