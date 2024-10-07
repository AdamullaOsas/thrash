import React from "react";
import { useMediaQuery } from "react-responsive";

const Card = ({ item, cart, addToCart, removeFromCart }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1024px)",
    });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    const cartItem = cart.find((cartItem) => cartItem.name === item.name);
    const itemQuantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="w-full">
            <div className="relative w-full">
                <img
                    src={
                        isMobile
                            ? item.image.mobile
                            : isTablet
                            ? item.image.tablet
                            : isDesktop
                            ? item.image.desktop
                            : item.image.mobile
                    }
                    alt={item.title}
                    className={`rounded-[8px] w-full ${
                        itemQuantity === 0 ? "" : "border-[2px] border-red"
                    }`}
                />

                {itemQuantity === 0 ? (
                    <div
                        className="w-[160px] h-11 bg-white rounded-full absolute left-1/2 -translate-x-[50%] -bottom-[22px] border-[1px] border-rose-400 flex items-center justify-center gap-2 z-10"
                        onClick={() => addToCart(item)}
                    >
                        <img
                            src="/images/icon-add-to-cart.svg"
                            alt="Add to cart"
                        />
                        <p className="text-rose-900 text4Bold">Add to cart</p>
                    </div>
                ) : (
                    <div className="w-[160px] h-11 bg-red rounded-full absolute left-1/2 -translate-x-[50%] -bottom-[22px] border-[1px] border-red flex items-center justify-between px-3 z-10">
                        <div
                            className="size-[20px] rounded-full border-[1px] border-white flex items-center justify-center"
                            onClick={() => removeFromCart(item)}
                        >
                            <img
                                src="/images/icon-decrement-quantity.svg"
                                alt="Remove from cart"
                            />
                        </div>
                        <p className="text4Bold text-white">{itemQuantity}</p>
                        <div
                            className="size-[20px] rounded-full border-[1px] border-white flex items-center justify-center"
                            onClick={() => addToCart(item)}
                        >
                            <img
                                src="/images/icon-increment-quantity.svg"
                                alt="Add to cart"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-10">
                <p className="text4 text-rose-500">{item.category}</p>
                <p className="text3 text-rose-900">{item.name}</p>
                <p className="text3 text-red">${item.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Card;
