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
        <div className="mt-[140px] mx-8 flex flex-col items-center">
            <div>
                <h1>Frequently Asked Questions</h1>
                <p>
                    Here are some of our FAQs. If you have any other questions
                    you'd like answered please feel free to email us.
                </p>
            </div>
            <div>
                {faqs.map((faq, index) => (
                    <Piece
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
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
                    className="w-[16px] h-[10px]"
                />
            </div>
            {isOpen && <p className="mt-4">{answer}</p>}
        </div>
    );
};

export default Accordion;
