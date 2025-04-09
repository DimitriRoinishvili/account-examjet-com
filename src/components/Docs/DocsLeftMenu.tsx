"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import docsData from "../../../data/config/docsData";

const removeTrailingSlash = (str: string) =>
    str.endsWith("/") && str !== "/" ? str.slice(0, -1) : str;

const getActiveId = (normalizedPath: string) => {
    for (const doc of docsData) {
        if (removeTrailingSlash(doc.path || "") === normalizedPath) {
            return doc.id;
        }
        if (doc.submenu) {
            for (const subdoc of doc.submenu) {
                if (removeTrailingSlash(subdoc.path || "") === normalizedPath) {
                    return subdoc.id;
                }
            }
        }
    }
    return null;
};

const DocsLeftMenu = () => {
    const pathname = usePathname();
    const docsIndex = pathname.indexOf("/docs");
    const relativePath = docsIndex !== -1 ? pathname.slice(docsIndex + 5) : pathname;
    const normalizedPath = removeTrailingSlash(relativePath === "" ? "/" : relativePath);

    const activeId = getActiveId(normalizedPath);

    // Use an object to track open state for each menu item that has a submenu.
    // Initialize using the expanded property (if defined) or default to true.
    const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>(() => {
        const initial: { [key: number]: boolean } = {};
        docsData.forEach((doc, index) => {
            if (doc.submenu) {
                initial[index] = doc.expanded ?? true;
            }
        });
        return initial;
    });

    const handleSubmenu = (index: number) => {
        setOpenIndexes((prev) => ({...prev, [index]: !prev[index]}));
    };

    const isActive = (id: number) => id === activeId;

    return (
        <nav className="w-full">
            {/* Set max height as viewport height minus offset and enable vertical scrolling */}
            <div
                className="sticky top-[74px] rounded-md border border-gray-200 p-3 max-h-[calc(100vh-140px)] overflow-y-auto">
                <ul className="space-y-1 text-sm">
                    {docsData.map((doc, index) => {
                        const linkPath = `/docs${doc.path || ""}`;
                        return (
                            <li key={doc.id}>
                                {doc.submenu ? (
                                    <div className={`flex items-center justify-between px-2 py-1 rounded-md ${
                                        isActive(doc.id)
                                            ? "bg-blue-50 text-primary font-medium"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}>
                                        <Link href={`${linkPath}/`} className="flex-1">
                                            {doc.title}
                                        </Link>
                                        <button onClick={() => handleSubmenu(index)} className="ml-2">
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.06 1.06l-4.25 3.98a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <Link href={`${linkPath}/`}
                                          className={`block px-2 py-1 rounded-md ${
                                              isActive(doc.id)
                                                  ? "bg-blue-50 text-primary font-medium"
                                                  : "text-gray-700 hover:bg-gray-100"
                                          }`}>
                                        {doc.title}
                                    </Link>
                                )}
                                {doc.submenu && openIndexes[index] && (
                                    <ul className="ml-4 mt-1 space-y-1">
                                        {doc.submenu.map((subdoc) => {
                                            const subLinkPath = `/docs${subdoc.path || ""}`;
                                            return (
                                                <li key={subdoc.id}>
                                                    <Link href={`${subLinkPath}/`}
                                                          className={`block px-2 py-1 rounded-md ${
                                                              isActive(subdoc.id)
                                                                  ? "bg-blue-50 text-primary font-medium"
                                                                  : "text-gray-700 hover:bg-gray-100"
                                                          }`}>
                                                        {subdoc.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default DocsLeftMenu;
