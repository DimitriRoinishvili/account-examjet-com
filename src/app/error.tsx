// src/app/error.tsx
"use client";

import Link from "next/link";
import {Metadata} from "next";
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Error Page | ${PAGE_SUFFIX}`
};

export default function ErrorPage({error, reset,}: {
    error: Error;
    reset: () => void;
}) {
    console.error("Global error caught:", error);

    return (
        <>
            <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
                <div className="container text-center">
                    <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
                        Oops! Something went wrong.
                    </h1>
                    <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                        We encountered an unexpected error. Please try refreshing the page or
                        click the button below to return to the homepage.
                    </p>
                    <Link
                        href="/"
                        className="inline-block rounded bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90"
                    >
                        Go to Home
                    </Link>
                </div>
            </section>
        </>
    );
}
