import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json"
// actual value you want to access
export const ProductsContext = createContext({
    products: [],
    setCurrentProducts: () => null,
})

export const ProductsProvider = ({ children }) => {
    const [products, setCurrentProducts] = useState(PRODUCTS);
    const value = {products, setCurrentProducts};

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //             createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);
    //     });
    //     return unsubscribe;
    // }, [])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}