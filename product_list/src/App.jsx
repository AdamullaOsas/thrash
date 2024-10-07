import React, { useState } from "react";
import data from "./data/data.json";
import Card from "./components/Card";
import Cart from "./components/Cart";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (cartItem) => cartItem.name === item.name
            );
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (cartItem) => cartItem.name === item.name
            );
            if (existingItem.quantity === 1) {
                return prevCart.filter(
                    (cartItem) => cartItem.name !== item.name
                );
            }
            return prevCart.map((cartItem) =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        });
    };

    return (
        <div className="w-full min-h-screen p-6 bg-rose-50 flex flex-col lg:flex-row lg:gap-8 justify-center">
            <div className="flex flex-col">
                <h1 className="text1 mb-8">Desserts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:max-w-[800px] gap-6">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            item={item}
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
            </div>
            <Cart
                cart={cart}
                setCart={setCart}
                removeFromCart={removeFromCart}
            />
        </div>
    );
};

export default App;
