import React, { useState } from "react";
import Modal from "./Modal";

const Cart = ({ cart, setCart, removeFromCart }) => {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const [completeOrder, setCompleteOrder] = useState(false);

    return (
        <div className="w-full h-full bg-white p-6 rounded-[12px] mt-8 lg:mt-0 lg:max-w-[384px]">
            <h1 className="text2 text-red">Your cart ({totalCount})</h1>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center mt-6 p-4 gap-4">
                    <img
                        src="/images/illustration-empty-cart.svg"
                        alt="Empty Cart"
                    />
                    <p className="text4Bold text-rose-500">
                        Your added items will appear here
                    </p>
                </div>
            ) : (
                <div className="mt-4">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center py-4 border-b-[1px] border-rose-100"
                        >
                            <div>
                                <h1 className="text4Bold">{item.name}</h1>
                                <div className="flex items-center gap-2">
                                    <p className="text4Bold text-red">
                                        {item.quantity}x
                                    </p>
                                    <p className="text4 text-rose-500">
                                        @${item.price.toFixed(2)}
                                    </p>
                                    <p className="text4Bold text-rose-500">
                                        $
                                        {(item.quantity * item.price).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="size-[20px] border-[1px] border-rose-400 rounded-full flex items-center justify-center"
                                onClick={() => removeFromCart(item)}
                            >
                                <img
                                    src="/images/icon-remove-item.svg"
                                    alt="Remove"
                                />
                            </div>
                        </div>
                    ))}
                    <div className="my-6 flex items-center justify-between">
                        <h1 className="text4 text-rose-900">Order Total</h1>
                        <p className="text2 text-rose-900">
                            ${totalPrice.toFixed(2)}
                        </p>
                    </div>
                    <div className="p-4 bg-rose-50 flex items-center justify-center gap-2 text-rose-900 rounded-[8px]">
                        <img src="/images/icon-carbon-neutral.svg" alt="" />
                        <p className="text4">
                            This is a{" "}
                            <span className="text4Bold">carbon-neutral</span>{" "}
                            delivery
                        </p>
                    </div>
                    <button
                        className="mt-6 h-[53px] w-full rounded-full flex items-center justify-center bg-red text-white text3"
                        onClick={() => setCompleteOrder(true)}
                    >
                        Confirm Order
                    </button>
                    {completeOrder && (
                        <Modal
                            cart={cart}
                            setCart={setCart}
                            setCompleteOrder={setCompleteOrder}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
