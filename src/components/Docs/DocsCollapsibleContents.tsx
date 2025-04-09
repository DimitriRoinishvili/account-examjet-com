'use client';

import {useState} from 'react';

interface Heading {
    level: number;
    text: string;
    id: string;
}

interface DocsCollapsibleContentsProps {
    headings: Heading[];
    compact?: boolean;
}

export default function DocsCollapsibleContents({headings}: DocsCollapsibleContentsProps) {
    const [open, setOpen] = useState(true);

    return (
        <div className="px-2">
            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center justify-between w-full py-1 dark:bg-gray-800`}>
                <span className="font-bold">On this page</span>
                <span className="text-xl">{open ? '-' : '+'}</span>
            </button>
            {open && (
                <ul className="mt-4 space-y-2 text-sm">
                    {headings.map((heading) => {
                        let indentClass = "";
                        if (heading.level === 2) {
                            indentClass = "ml-4";
                        } else if (heading.level === 3) {
                            indentClass = "ml-8";
                        }
                        return (
                            <li key={heading.id} className={indentClass}>
                                <a href={`#${heading.id}`} className="text-gray-600 hover:text-gray-900 block truncate">
                                    {heading.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
