import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Single = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { gridSize } = location.state;

    const totalCards = gridSize * gridSize;
    const totalPairs = totalCards / 2;

    const [cards, setCards] = useState([]);
    const [firstChoice, setFirstChoice] = useState(null);
    const [secondChoice, setSecondChoice] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const [moves, setMoves] = useState(0);

    const [menuOpen, setMenuOpen] = useState(false);

    const shuffleCards = () => {
        const numbers = Array.from({ length: totalPairs }, (_, i) => i);
        const shuffledNumbers = [...numbers, ...numbers]
            .sort(() => Math.random() - 0.5)
            .map((number) => ({ number, id: Math.random(), matched: false }));

        setCards(shuffledNumbers);
        setFirstChoice(null);
        setSecondChoice(null);
        setMatchedPairs(0);
    };

    const handleChoice = (card) => {
        firstChoice ? setSecondChoice(card) : setFirstChoice(card);
        setMoves((prev) => prev + 1);
    };

    useEffect(() => {
        if (firstChoice && secondChoice) {
            setDisabled(true);
            if (firstChoice.number === secondChoice.number) {
                setCards((prevCards) =>
                    prevCards.map((card) =>
                        card.number === firstChoice.number
                            ? { ...card, matched: true }
                            : card
                    )
                );
                setMatchedPairs((prev) => prev + 1);
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [firstChoice, secondChoice]);

    const resetTurn = () => {
        setFirstChoice(null);
        setSecondChoice(null);
        setDisabled(false);
    };

    useEffect(() => {
        shuffleCards();
    }, [gridSize]);

    const handleRestart = () => {
        shuffleCards();
        setFirstChoice(null);
        setSecondChoice(null);
        setDisabled(false);
        setMenuOpen(false);
        setMatchedPairs(0);
        setMoves(0);
    };

    const handleResumeGame = () => {
        setMenuOpen(false);
    };

    return (
        <div className="flex flex-col p-6 w-full min-h-screen">
            <div className="flex justify-between items-center mb-20">
                <img src="/logo.svg" alt="" className="w-[92px]" />
                <button
                    className="h-10 w-[78px] bg-[#FDA214] text-[#FCFCFC] rounded-[26px] startButtons"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    Menu
                </button>
                {menuOpen && (
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center h-full w-full px-6">
                        <div className="bg-white p-6 flex items-center justify-center gap-4 flex-col rounded-[10px] w-full">
                            <button
                                className="menuButton bg-[#FDA214] text-white"
                                onClick={handleRestart}
                            >
                                Restart
                            </button>
                            <button
                                className="menuButton bg-[#DFE7EC] text-[#304859]"
                                onClick={() => navigate("/")}
                            >
                                New Game
                            </button>
                            <button
                                className="menuButton bg-[#DFE7EC] text-[#304859]"
                                onClick={handleResumeGame}
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`grid max-w-[327px] ${
                    gridSize === 4 ? "grid-cols-4" : "grid-cols-6"
                } gap-3 self-center`}
            >
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={
                            card === firstChoice ||
                            card === secondChoice ||
                            card.matched
                        }
                        cardMatched={card.matched}
                        disabled={disabled}
                        gridSize={gridSize}
                    />
                ))}
            </div>
            <div className="w-full mt-auto flex justify-center gap-6 items-center">
                <div className="h-[70px] w-[151px] bg-[#DFE7EC] rounded-[5px] flex flex-col items-center justify-center ">
                    <p className="littleBoxTitle text-[#7191A5]">Time</p>
                    <p className="littleBoxValue text-[#304859]">00:00</p>
                </div>
                <div className="h-[70px] w-[151px] bg-[#DFE7EC] rounded-[5px] flex flex-col items-center justify-center ">
                    <p className="littleBoxTitle text-[#7191A5]">Moves</p>
                    <p className="littleBoxValue text-[#304859]">{moves}</p>
                </div>
            </div>
        </div>
    );
};

function Card({
    card,
    handleChoice,
    flipped,
    cardMatched,
    disabled,
    gridSize,
}) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div
            className={`${
                gridSize === 4 ? "size-[72px]" : "size-[47px]"
            } rounded-full cursor-pointer ${
                flipped ? "bg-[#BCCED9]" : "bg-[#304859]"
            } flex justify-center items-center text-white cardNumber
            ${cardMatched ? "bg-[#FDA214]" : ""}
            `}
            onClick={handleClick}
        >
            {flipped ? card.number : ""}
        </div>
    );
}

export default Single;
