"use client";
import Image from "next/image";
import Link from "next/link";
import {BASE_PATH, STUDYDROME_FACEBOOK_URL, STUDYDROME_INSTAGRAM_URL, STUDYDROME_LINKEDIN_URL} from "@/config";

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-white pt-8 dark:bg-gray-dark md:pt-10 lg:pt-12">
                <div className="container px-4">
                    <div className="-mx-2 flex flex-wrap">
                        <div className="w-full px-2 md:w-1/2 lg:w-4/12 xl:w-5/12">
                            <div className="mb-6 max-w-[360px]">
                                <Link href="/" className="mb-4 inline-block">
                                    <Image src={`${BASE_PATH}/images/logo/ExamJet-Logo-45x45-1.webp`}
                                           alt="logo"
                                           width={45}
                                           height={45}
                                           className="w-[45px] h-[45px]"/>
                                </Link>
                                <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                                    Follow us
                                </p>
                                <div className="flex items-center">
                                    <a href={`${STUDYDROME_LINKEDIN_URL}`}
                                       aria-label="LinkedIn"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="mr-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             fill="currentColor"
                                             viewBox="0 0 24 24"
                                             className="h-6 w-6">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-.966 0-1.75-.784-1.75-1.75 0-.965.784-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .966-.784 1.75-1.75 1.75zm13.5 11.2h-3v-5.6c0-1.337-.027-3.062-1.864-3.062-1.864 0-2.148 1.455-2.148 2.96v5.702h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.034 0 3.597 1.997 3.597 4.593v5.602z"/>
                                        </svg>
                                    </a>
                                    <a href={`${STUDYDROME_FACEBOOK_URL}`}
                                       aria-label="Facebook"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="mr-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             fill="currentColor"
                                             viewBox="0 0 24 24"
                                             className="h-6 w-6">
                                            <path
                                                d="M22.675 0h-21.35c-.737 0-1.325.587-1.325 1.326v21.348c0 .739.588 1.326 1.325 1.326h11.495v-9.293h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.622h-3.12v9.293h6.116c.737 0 1.324-.587 1.324-1.326v-21.349c0-.739-.587-1.326-1.324-1.326z"/>
                                        </svg>
                                    </a>
                                    <a href={`${STUDYDROME_INSTAGRAM_URL}`}
                                       aria-label="Instagram"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             fill="currentColor"
                                             viewBox="0 0 24 24"
                                             className="h-6 w-6">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.974.974 1.251 2.241 1.314 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.251-3.608 1.314-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.251-2.241-1.314-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608.974-.974 2.241-1.251 3.608-1.314 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.013-4.947.072-1.56.07-2.95.337-4.006 1.393-1.057 1.057-1.324 2.446-1.393 4.006-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.07 1.56.337 2.95 1.393 4.006 1.057 1.057 2.446 1.324 4.006 1.393 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.56-.07 2.95-.337 4.006-1.393 1.057-1.057 1.324-2.446 1.393-4.006.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.07-1.56-.337-2.95-1.393-4.006-1.057-1.057-2.446-1.324-4.006-1.393-1.28-.059-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-6">
                                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                                    Useful Links
                                </h2>
                                <ul>
                                    <li>
                                        <Link href="/blog"
                                              className="mb-2 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/docs"
                                              className="mb-2 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                            Knowledge Base
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare"
                                              className="mb-2 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                            Compare Alternatives
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-2 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-6">
                                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                                    Terms
                                </h2>
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy"
                                              className="mb-2 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cloud-terms-of-service"
                                              className="mb-2 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-2 md:w-1/2 lg:w-4/12 xl:w-3/12">
                            <div className="mb-6">
                                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                                    Support &amp; Help
                                </h2>
                                <ul>
                                    <li>
                                        <Link href="/contact"
                                              className="mb-2 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                                            Open Support Ticket
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
                    <div className="py-4 text-sm text-center text-gray-700">
                        Copyright © {new Date().getFullYear()} StudyDrome
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
