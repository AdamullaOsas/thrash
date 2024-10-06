import React from "react";
import data from "./data/data.json";
import { useMediaQuery } from "react-responsive";

const App = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1024px)",
    });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    return (
        <div className="w-full min-h-screen p-6 bg-rose-50 flex flex-col lg:flex-row lg:gap-8 justify-center">
            <div className="flex flex-col">
                <h1 className="text1 mb-8 ">Desserts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:max-w-[800px] gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="w-full">
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
                                    className="rounded-[8px] w-full"
                                />

                                <div className="w-[160px] h-11 bg-white rounded-full absolute left-1/2 -translate-x-[50%] -bottom-[22px] border-[1px] border-rose-400 flex items-center justify-center gap-2 z-10">
                                    <img
                                        src="/images/icon-add-to-cart.svg"
                                        alt="Add to cart"
                                    />
                                    <p className="text-rose-900 text4Bold">
                                        Add to cart
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <p className="text4 text-rose-500">
                                    {item.category}
                                </p>
                                <p className="text3 text-rose-900">
                                    {item.name}
                                </p>
                                <p className="text3 text-red">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-full bg-white p-6 rounded-[12px] mt-8 lg:mt-0 lg:max-w-[384px]">
                <h1 className="text2 text-red">Your cart(0)</h1>
                <div className="flex flex-col items-center mt-6 p-4 gap-4">
                    <img src="/images/illustration-empty-cart.svg" alt="" />
                    <p className="text4Bold text-rose-500">
                        Your added items will appear here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
