import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Result from "./components/Result";

const App = () => {
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [mortgageType, setMortgageType] = useState("");
    const [calculatedMonthlyRepayment, setCalculatedMonthlyRepayment] =
        useState(null);
    const [totalRepayment, setTotalRepayment] = useState(null);
    const [errors, setErrors] = useState({});

    const calculateRepayments = () => {
        setErrors({});

        let newErrors = {};
        if (!mortgageAmount || isNaN(mortgageAmount) || mortgageAmount <= 0) {
            newErrors.mortgageAmount = "Please enter a valid mortgage amount";
        }
        if (!mortgageTerm || isNaN(mortgageTerm) || mortgageTerm <= 0) {
            newErrors.mortgageTerm = "Please enter a valid mortgage term";
        }
        if (!interestRate || isNaN(interestRate) || interestRate <= 0) {
            newErrors.interestRate = "Please enter a valid interest rate";
        }
        if (!mortgageType) {
            newErrors.mortgageType = "Please select a mortgage type";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        let monthlyRepayment = 0;
        let totalRepayment = 0;

        const principal = parseFloat(mortgageAmount);
        const annualInterestRate = parseFloat(interestRate) / 100;
        const monthlyInterestRate = annualInterestRate / 12;
        const numberOfPayments = parseFloat(mortgageTerm) * 12;

        if (mortgageType === "repayment") {
            monthlyRepayment =
                (principal * monthlyInterestRate) /
                (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
            totalRepayment = monthlyRepayment * numberOfPayments;
        } else if (mortgageType === "interest-only") {
            monthlyRepayment = principal * monthlyInterestRate;
            totalRepayment = monthlyRepayment * numberOfPayments + principal;
        }

        monthlyRepayment = monthlyRepayment.toFixed(2);
        totalRepayment = totalRepayment.toFixed(2);

        setCalculatedMonthlyRepayment(monthlyRepayment);
        setTotalRepayment(totalRepayment);
    };

    return (
        <div className="min-h-screen w-full bg-slate-100 sm:flex sm:items-center sm:justify-center">
            <div className="bg-white max-w-[1008px] flex flex-col sm:flex-row">
                <Calculator
                    mortgageAmount={mortgageAmount}
                    setMortgageAmount={setMortgageAmount}
                    mortgageTerm={mortgageTerm}
                    setMortgageTerm={setMortgageTerm}
                    interestRate={interestRate}
                    setInterestRate={setInterestRate}
                    mortgageType={mortgageType}
                    setMortgageType={setMortgageType}
                    calculateRepayments={calculateRepayments}
                    errors={errors}
                    setErrors={setErrors}
                />
                <Result
                    calculatedMonthlyRepayment={calculatedMonthlyRepayment}
                    totalRepayment={totalRepayment}
                />
            </div>
        </div>
    );
};

export default App;
