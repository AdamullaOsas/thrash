import React from "react";

const Calculator = ({
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setInterestRate,
    mortgageType,
    setMortgageType,
    calculateRepayments,
    errors,
    hasSubmitted,
    handleClear,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateRepayments();
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <div className="w-full px-6 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                <h1 className="text2">Mortgage Calculator</h1>
                <button
                    type="button"
                    className="max-w-fit underline underline-offset-2 text-slate-700"
                    onClick={handleClear}
                >
                    Clear all
                </button>
            </div>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                    <label className="text4 text-slate-700">
                        Mortgage Amount
                    </label>
                    <div
                        className={`flex items-center w-full border-[1px] h-12 rounded-[4px] ${
                            hasSubmitted && errors.mortgageAmount
                                ? "border-red"
                                : "border-[#6B94A8]"
                        }`}
                    >
                        <span
                            className={`h-full px-4 rounded-l-[4px] flex items-center ${
                                hasSubmitted && errors.mortgageAmount
                                    ? "bg-red text-white"
                                    : "bg-slate-100"
                            }`}
                        >
                            £
                        </span>
                        <input
                            type="text"
                            name="mortgageAmount"
                            className="w-full outline-none px-4 text3 tracking-[0%] text-slate-900"
                            value={mortgageAmount}
                            onChange={handleInputChange(setMortgageAmount)}
                        />
                    </div>
                    {hasSubmitted && errors.mortgageAmount && (
                        <p className="text-red text5 mt-1">
                            {errors.mortgageAmount}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full ">
                    <label className="text4 text-slate-700">
                        Mortgage Term
                    </label>
                    <div
                        className={`flex items-center w-full border-[1px] h-12 rounded-[4px] ${
                            hasSubmitted && errors.mortgageTerm
                                ? "border-red"
                                : "border-[#6B94A8]"
                        }`}
                    >
                        <input
                            type="text"
                            name="mortgageTerm"
                            className="w-full outline-none px-4 text3 tracking-[0%] text-slate-900"
                            value={mortgageTerm}
                            onChange={handleInputChange(setMortgageTerm)}
                        />
                        <span
                            className={`h-full px-4 rounded-r-[4px] flex items-center text3 tracking-[0%] ${
                                hasSubmitted && errors.mortgageTerm
                                    ? "bg-red text-white"
                                    : "bg-slate-100 text-slate-700"
                            }`}
                        >
                            years
                        </span>
                    </div>
                    {hasSubmitted && errors.mortgageTerm && (
                        <p className="text-red text5 mt-1">
                            {errors.mortgageTerm}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label className="text4 text-slate-700">
                        Interest Rate
                    </label>
                    <div
                        className={`flex items-center w-full border-[1px] h-12 rounded-[4px] ${
                            hasSubmitted && errors.interestRate
                                ? "border-red"
                                : "border-[#6B94A8]"
                        }`}
                    >
                        <input
                            type="text"
                            name="interestRate"
                            className="w-full outline-none px-4 text3 tracking-[0%] text-slate-900"
                            value={interestRate}
                            onChange={handleInputChange(setInterestRate)}
                        />
                        <span
                            className={`h-full px-4 rounded-r-[4px] flex items-center text3 tracking-[0%] ${
                                hasSubmitted && errors.interestRate
                                    ? "bg-red text-white"
                                    : "bg-slate-100 text-slate-700"
                            }`}
                        >
                            %
                        </span>
                    </div>
                    {hasSubmitted && errors.interestRate && (
                        <p className="text-red text5 mt-1">
                            {errors.interestRate}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text4 text-slate-700">
                        Mortgage Type
                    </label>
                    <div className="flex flex-col gap-3">
                        <div
                            onClick={() => setMortgageType("repayment")}
                            className={`w-full rounded-[4px] border-[1px] px-4 py-3 flex gap-4 items-center cursor-pointer font-bold ${
                                mortgageType === "repayment"
                                    ? "border-lime bg-lime/25 text-slate-900"
                                    : "border-[#6B94A8] text-slate-700"
                            }`}
                        >
                            <div
                                className={`size-5 rounded-full border-2 flex-shrink-0  flex items-center justify-center ${
                                    mortgageType === "repayment"
                                        ? "border-lime"
                                        : "border-[#6B94A8]"
                                }`}
                            >
                                <span
                                    className={`${
                                        mortgageType === "repayment"
                                            ? "size-[10px] bg-lime rounded-full"
                                            : "hidden"
                                    }`}
                                ></span>
                            </div>
                            Repayment
                        </div>

                        <div
                            onClick={() => setMortgageType("interest-only")}
                            className={`w-full rounded-[4px] border-[1px] px-4 py-3 flex gap-4 items-center cursor-pointer font-bold ${
                                mortgageType === "interest-only"
                                    ? "border-lime bg-lime/25 text-slate-900"
                                    : "border-[#6B94A8] text-slate-700"
                            }`}
                        >
                            <div
                                className={`size-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                                    mortgageType === "interest-only"
                                        ? "border-lime"
                                        : "border-[#6B94A8]"
                                }`}
                            >
                                <span
                                    className={`${
                                        mortgageType === "interest-only"
                                            ? "size-[10px] bg-lime rounded-full"
                                            : "hidden"
                                    }`}
                                ></span>
                            </div>
                            Interest Only
                        </div>
                    </div>
                    {hasSubmitted && errors.mortgageType && (
                        <p className="text-red text5 mt-1">
                            {errors.mortgageType}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="flex gap-3 items-center justify-center h-[56px] w-full bg-lime rounded-full text3 text-slate-900 tracking-[0%]"
                >
                    <img src="/images/icon-calculator.svg" alt="Calculate" />
                    Calculate Repayments
                </button>
            </form>
        </div>
    );
};

export default Calculator;
