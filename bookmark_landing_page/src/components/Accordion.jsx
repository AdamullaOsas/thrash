import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";

const Accordion = () => {
    const faqs = [
        {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Nullam euismod, libero nec lacinia lacinia, libero nisi ultricies turpis, nec tincidunt nunc purus ac justo.",
        },
        {
            question: "How can I request a new browser?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Nullam euismod, libero nec lacinia lacinia, libero nisi ultricies turpis, nec tincidunt nunc purus ac justo.",
        },
        {
            question: "Is there a mobile app?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Nullam euismod, libero nec lacinia lacinia, libero nisi ultricies turpis, nec tincidunt nunc purus ac justo.",
        },
        {
            question: "What about other Chromium browsers?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Nullam euismod, libero nec lacinia lacinia, libero nisi ultricies turpis, nec tincidunt nunc purus ac justo.",
        },
    ];
    return (
        <div className="mt-[140px] mx-8 flex flex-col items-center text-center">
            <div className="max-w-[540px]">
                <h1 className="featuresTitle">Frequently Asked Questions</h1>
                <p className="paraMobile leading-[25px]">
                    Here are some of our FAQs. If you have any other questions
                    you'd like answered please feel free to email us.
                </p>
            </div>
            <div className="w-full max-w-[540px] mt-14">
                {faqs.map((faq, index) => (
                    <Piece
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
            <button className="h-12 bg-blue text-white buttonText rounded-[5px] min-w-[114px] mt-[54px] mx-auto md:mx-0 max-w-[114px]">
                More Info
            </button>
        </div>
    );
};

const Piece = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-4 border-b border-navy border-opacity-15 w-full">
            <div
                className="flex justify-between items-center cursor-pointer w-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="faQuestion">{question}</p>
                <img
                    src={arrow}
                    alt="toggleIcon"
                    className={`w-[16px] h-[10px] ${
                        isOpen ? "transform rotate-180" : ""
                    }`}
                    style={
                        isOpen
                            ? {
                                  filter: "brightness(0) saturate(100%) invert(47%) sepia(15%) saturate(2000%) hue-rotate(312deg) brightness(101%) contrast(115%)",
                              }
                            : {}
                    }
                />
            </div>
            {isOpen && <p className="mt-4 text-start faAnswer">{answer}</p>}
        </div>
    );
};

export default Accordion;
