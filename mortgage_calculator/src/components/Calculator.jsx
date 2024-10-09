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
    setErrors,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateRepayments();
    };

    const handleClear = () => {
        setMortgageAmount("");
        setMortgageTerm("");
        setInterestRate("");
        setMortgageType("");
        setErrors({});
    };
    console.log(errors);

    const handleInputChange = (setter, fieldName) => (e) => {
        setter(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
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
                        className={`flex items-center w-full border-[1px] border-[#6B94A8] h-12 rounded-[4px] ${
                            errors.mortgageAmount !== "" ? "border-red" : ""
                        }`}
                    >
                        <span
                            className={`h-full px-4 rounded-l-[4px] bg-slate-100 flex items-center ${
                                errors.mortgageAmount !== ""
                                    ? "bg-red text-white"
                                    : ""
                            }`}
                        >
                            £
                        </span>
                        <input
                            type="text"
                            name="mortgageAmount"
                            className="w-full outline-none px-4 text3 tracking-[0%] text-slate-900"
                            value={mortgageAmount}
                            onChange={handleInputChange(
                                setMortgageAmount,
                                "mortgageAmount"
                            )}
                        />
                    </div>
                    {errors.mortgageAmount && (
                        <p className="text-red text5 mt-1">
                            {errors.mortgageAmount}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label className="text4 text-slate-700">
                        Mortgage Term
                    </label>
                    <div className="flex items-center w-full border-[1px] border-[#6B94A8] h-12 rounded-[4px]">
                        <input
                            type="text"
                            name="mortgageTerm"
                            className="w-full outline-none px-4 text3 tracking-[0%] text-slate-900"
                            value={mortgageTerm}
                            onChange={handleInputChange(
                                setMortgageTerm,
                                "mortgageTerm"
                            )}
                        />
                        <span className="h-full px-4 rounded-r-[4px] bg-slate-100 flex items-center text3 tracking-[0%] text-slate-700">
                            years
                        </span>
                    </div>
                    {errors.mortgageTerm && (
                        <p className="text-red text5 mt-1">
                            {errors.mortgageTerm}
                        </p>
                    )}
                </div>

                <div className="flex flex-col w-full">
                    <label className="text4 text-slate-700">
                        Interest Rate
                    </label>
                    <div className="flex items-center w-full border-[1px] border-[#6B94A8] h-12 rounded-[4px]">
                        <input
                            type="text"
                            name="interestRate"
                            className="w-full outline-none px-4 text3 tracking-[0%] text-slate-900"
                            value={interestRate}
                            onChange={handleInputChange(
                                setInterestRate,
                                "interestRate"
                            )}
                        />
                        <span className="h-full px-4 rounded-r-[4px] bg-slate-100 flex items-center text3 tracking-[0%] text-slate-700">
                            %
                        </span>
                    </div>
                    {errors.interestRate && (
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
                            className={`w-full rounded-[4px] border-[1px] px-4 py-3 flex gap-4 items-center cursor-pointer text-slate-900 font-bold ${
                                mortgageType === "repayment"
                                    ? "border-lime bg-lime/25 "
                                    : "border-[#6B94A8] text-slate-700"
                            }`}
                        >
                            <div
                                className={`size-5 rounded-full border-2 flex-shrink-0  flex items-center justify-center text-slate-900 ${
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
                            className={`w-full rounded-[4px] border-[1px] px-4 py-3 flex gap-4 items-center cursor-pointer text-slate-900 font-bold ${
                                mortgageType === "interest-only"
                                    ? "border-lime bg-lime/25 "
                                    : "border-[#6B94A8] text-slate-700"
                            }`}
                        >
                            <div
                                className={`size-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-slate-900 ${
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
                    {errors.mortgageType && (
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
