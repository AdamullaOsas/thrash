import React from "react";

const Modal = ({ cart, setCart, setCompleteOrder }) => {
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const startNewOrder = () => {
        setCart([]);
        setCompleteOrder(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
            <div className="bg-white w-full lg:max-w-[500px] p-6 pt-10 rounded-t-[12px] sm:rounded-b-[12px] flex flex-col gap-8 sm:max-w-[592px] ">
                <div className="flex flex-col">
                    <img
                        src="/images/icon-order-confirmed.svg"
                        alt="Order Confirmed"
                        className="size-12 mb-6"
                    />
                    <h1 className="text1 text-rose-900 mb-2">
                        Order Confirmed
                    </h1>
                    <p className="text4 text-rose-500">
                        We hope you enjoy your food!
                    </p>
                </div>
                <div className="bg-rose-50 rounded-[8px]">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center px-6 py-4 border-b-[1px] border-rose-100"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image.thumbnail}
                                    alt={item.name}
                                    className="size-12 rounded-[4px]"
                                />
                                <div className="flex flex-col gap-2">
                                    <p>{item.name}</p>
                                    <div className="flex gap-2">
                                        <p className="text4Bold text-red">
                                            {item.quantity}x
                                        </p>
                                        <p className="text4 text-rose-500">
                                            @${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text3 text-rose-900">
                                ${(item.quantity * item.price).toFixed(2)}
                            </p>
                        </div>
                    ))}
                    <div className="my-6 px-6 flex items-center justify-between">
                        <h1 className="text4 text-rose-900">Order Total</h1>
                        <p className="text2 text-rose-900">
                            ${totalPrice.toFixed(2)}
                        </p>
                    </div>
                </div>
                <button
                    className="h-[52px] w-full bg-red text-white rounded-full text3"
                    onClick={startNewOrder}
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
};

export default Modal;
