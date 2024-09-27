import React, { useState } from "react";
import error from "../images/icon-error.svg";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    return (
        <div className="h-[360px] bg-blue mt-[123px] w-full px-8 flex flex-col">
            <div className="flex flex-col text-center mt-[60px] max-w-[450px] self-center">
                <p className="contactPara">35,000+ ALREADY JOINED</p>
                <h1 className="contactTitle md:contactTitleDektop">
                    Stay up-to-date with what we're doing
                </h1>
            </div>
            <form
                noValidate
                className="flex flex-col gap-4 mt-8 md:flex-row self-center"
                onSubmit={validateEmail}
            >
                <div className="relative ">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`w-[300px] min-h-12 px-[20px] py-[10px] rounded-[5px] outline-none ${
                            emailError
                                ? "border-[2px] border-red border-b-[24px]"
                                : ""
                        }`}
                    />

                    {emailError && (
                        <img
                            src={error}
                            alt="Error"
                            className="absolute right-3 top-1/2 transform -translate-y-[100%]"
                        />
                    )}

                    {emailError && (
                        <p className="absolute left-3 top-1/2 transform translate-y-[100%] errorMessage text-white">
                            Whoops, make sure it's an email
                        </p>
                    )}
                </div>

                <button
                    className="w-full md:w-[126px] bg-red border-[2px] border-red hover:bg-white hover:text-red text-white buttonText tracking-[0.25px] h-12 rounded-[5px]"
                    type="submit"
                >
                    Contact Us
                </button>
            </form>
        </div>
    );
};

export default Contact;
