import React from "react";

const Calculator = () => {
    return (
        <div className="w-full px-6 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                <h1 className="text2">Mortgage Calculator</h1>
                <button className="max-w-fit underline underline-offset-2 text-slate-700">
                    Clear all
                </button>
            </div>
            <form className="flex flex-col gap-6">
                <div className="flex flex-col w-full">
                    <label className="text4 text-slate-700">
                        Mortgage Amount
                    </label>
                    <div className="flex items-center w-full border-[1px] border-[#6B94A8] h-12 rounded-[4px]">
                        <span className="h-full px-4 rounded-l-[4px] bg-slate-100 pt-[10px]">
                            £
                        </span>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label>Mortgage Term</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Interest Rate</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Mortgage Type</label>
                    <div>
                        <input type="radio" />
                        Repayment
                        <input type="radio" />
                        Interest Only
                    </div>
                </div>
                <button>
                    <img src="/images/icon-calculator.svg" alt="Calculate" />
                    Calculate Repayments
                </button>
            </form>
        </div>
    );
};

export default Calculator;
