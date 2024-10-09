import React from "react";

const Result = ({ calculatedMonthlyRepayment, totalRepayment }) => {
    const open = calculatedMonthlyRepayment !== null;

    return (
        <>
            {!open ? (
                <div className="w-full py-8 px-6 bg-slate-900 flex flex-col gap-4 items-center">
                    <img
                        src="/images/illustration-empty.svg"
                        alt="Empty illustration"
                    />
                    <h1 className="text2 text-white tracking-[0%]">
                        Results shown here
                    </h1>
                    <p className="text4 text-slate-300 text-center">
                        Complete the form and click “calculate repayments” to
                        see what your monthly repayments would be.
                    </p>
                </div>
            ) : (
                <div className="w-full py-8 px-6 bg-slate-900 flex flex-col gap-6 items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="text2 text-white tracking-[0%]">
                            Your results
                        </h1>
                        <p className="text4 text-slate-300">
                            Your results are shown below based on the
                            information you provided. To adjust the results,
                            edit the form and click “calculate repayments”
                            again.
                        </p>
                    </div>
                    <div className="px-4 py-6 relative w-full border-t-[4px] border-lime rounded-[8px]">
                        <div className="w-full h-full absolute inset-0 bg-black bg-opacity-25 pointer-events-none"></div>
                        <div className="relative z-10 pb-4 border-b-[1px] border-[#9ABED5] border-opacity-25 flex flex-col gap-2">
                            <p className="text4 text-slate-300">
                                Your monthly repayments
                            </p>
                            <h1 className="text1 text-lime sm:text-[56px]">
                                £{calculatedMonthlyRepayment}
                            </h1>
                        </div>
                        <div className="relative z-10 flex flex-col gap-2 pt-4">
                            <p className="text4 text-slate-300">
                                Total you'll repay over the term
                            </p>
                            <h1 className="text2 text-white ">
                                £{totalRepayment}
                            </h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Result;
