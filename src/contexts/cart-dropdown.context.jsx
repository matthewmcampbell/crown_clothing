import { createContext, useState, useEffect } from "react";
// actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
})

export const DropdownProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //             createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);
    //     });
    //     return unsubscribe;
    // }, [])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}