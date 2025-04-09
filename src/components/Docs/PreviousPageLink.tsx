"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useMemo} from "react";
import docsData from "../../../data/config/docsData";

interface Doc {
    id: number;
    title: string;
    path: string;
}

const removeTrailingSlash = (str: string) =>
    str.endsWith("/") && str !== "/" ? str.slice(0, -1) : str;

const flattenDocs = (docs: any[]): Doc[] => {
    return docs.reduce<Doc[]>((acc, doc) => {
        if (doc.path) {
            acc.push({id: doc.id, title: doc.title, path: doc.path});
        }
        if (doc.submenu && Array.isArray(doc.submenu)) {
            acc.push(...flattenDocs(doc.submenu));
        }
        return acc;
    }, []);
};

const PreviousPageLink = () => {
    const pathname = usePathname();

    const docsIndex = pathname.indexOf("/docs");
    const relativePath = docsIndex !== -1 ? pathname.slice(docsIndex + 5) : pathname;
    const normalizedPath = removeTrailingSlash(relativePath === "" ? "/" : relativePath);

    const flatDocs = useMemo(() => flattenDocs(docsData), []);
    const currentIndex = flatDocs.findIndex(
        (doc) => removeTrailingSlash(doc.path) === normalizedPath
    );

    // If the current page is not found or is the first one, do not show a previous link.
    if (currentIndex === -1 || currentIndex === 0) {
        return null;
    }

    const previousDoc = flatDocs[currentIndex - 1];
    const previousLink = `/docs${previousDoc.path}`;

    return (
        <div className="mt-8">
            <Link href={previousLink} className="flex items-center text-gray-700 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                <span>{previousDoc.title}</span>
            </Link>
        </div>
    );
};

export default PreviousPageLink;
