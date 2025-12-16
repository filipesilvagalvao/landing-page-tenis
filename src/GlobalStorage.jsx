import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

    const [cart, setCart] = useState(cartLocalStorage);
    const [data, setData] = useState(null);

    async function getData() {
        try {
            const response = await fetch("./src/products.json");
            const json = await response.json();
            setData(json);
        }
        catch (error) {
            console.log("Erro ao buscar dados:", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(cart)

    function addToCart(item) {
        setCart((prevCart) => [...prevCart, item]);
    }

    function removeFromCart(itemId) {
        console.log(itemId)
        setCart((prevCart) => prevCart.filter((item) => item !== itemId));
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <GlobalContext.Provider value={{ data, cart, addToCart, removeFromCart }}>
            {children}
        </GlobalContext.Provider>
    )
}