import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";
import useBreakpoint from "../hooks/useBreakpoint";

const Home = () => {
    const navigate = useNavigate();
    const breakpoint = useBreakpoint();

    const dataWithIndex = data.map((item, idx) => ({ ...item, index: idx }));

    const columnsByBreakpoint = {
        phone: [dataWithIndex.map((item) => item.index)],
        tablet: [
            [0, 2, 4, 6, 8, 11, 13],
            [1, 3, 5, 7, 9, 10, 12, 14],
        ],
        desktop: [
            [0, 4, 8, 11],
            [1, 5, 9, 12],
            [2, 6, 13],
            [3, 7, 10, 14],
        ],
    };

    const columnsIndices = columnsByBreakpoint[breakpoint];
    const columnsData = columnsIndices.map((indices) =>
        indices.map((index) => dataWithIndex[index])
    );

    return (
        <div className="p-6">
            <div className="flex flex-row gap-x-10">
                {columnsData.map((columnItems, columnIndex) => (
                    <div
                        key={columnIndex}
                        className="flex flex-col gap-y-6 md:gap-y-10"
                    >
                        {columnItems.map((item) => (
                            <div
                                key={item.index}
                                className="relative cursor-pointer"
                                onClick={() =>
                                    navigate("/Slides", {
                                        state: { startIndex: item.index },
                                    })
                                }
                            >
                                <img
                                    src={item.images.thumbnail}
                                    alt={item.name}
                                    className="w-full h-auto"
                                />

                                <div className="absolute bottom-0 left-0 w-full h-[170px] bg-gradient-to-t from-black/[0.84] to-transparent z-10"></div>
                                <div className="absolute bottom-8 left-8 flex flex-col text-white z-20">
                                    <h1 className="homeTitle">{item.name}</h1>
                                    <p className="homeAuthor">
                                        {item.artist.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
