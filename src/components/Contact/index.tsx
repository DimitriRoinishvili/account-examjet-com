"use client";
import React, {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import NewsLatterBox from "./NewsletterBox";
import {FORMSPREE_CONTACT_URL} from "@/config";

const Contact = () => {
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    const onCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please complete the CAPTCHA");
            return;
        }

        e.target.submit();
    };

    return (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s">
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Need Help? Open a Ticket
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Our support team will get back to you ASAP via email.
                            </p>
                            <form action={FORMSPREE_CONTACT_URL}
                                  method="POST"
                                  onSubmit={handleSubmit}>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label htmlFor="name"
                                                   className="mb-3 block text-sm font-medium text-dark dark:text-white">
                                                Your Name
                                            </label>
                                            <input type="text"
                                                   name="name"
                                                   id="name"
                                                   placeholder="Enter your name"
                                                   className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"/>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-8">
                                            <label htmlFor="email"
                                                   className="mb-3 block text-sm font-medium text-dark dark:text-white">
                                                Your Email
                                            </label>
                                            <input type="email"
                                                   name="email"
                                                   id="email"
                                                   placeholder="Enter your email"
                                                   className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"/>
                                        </div>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="mb-8">
                                            <label htmlFor="message"
                                                   className="mb-3 block text-sm font-medium text-dark dark:text-white">
                                                Your Message
                                            </label>
                                            <textarea name="message"
                                                      id="message"
                                                      rows={5}
                                                      placeholder="Enter your Message"
                                                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none">
                                            </textarea>
                                        </div>
                                    </div>

                                    {/* reCAPTCHA widget */}
                                    <div className="w-full px-4 mb-8">
                                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                   onChange={onCaptchaChange}
                                                   ref={recaptchaRef}/>
                                    </div>
                                    <div className="w-full px-4">
                                        <button type="submit"
                                                className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                                            Submit Ticket
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        <NewsLatterBox/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
