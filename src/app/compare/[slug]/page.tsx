import fs from "fs/promises";
import path from "path";
import {Metadata} from "next";
import React from "react";
import PostContent from "@/components/Blog/PostContent";
import DocsCollapsibleContents from "@/components/Docs/DocsCollapsibleContents";
import {PAGE_SUFFIX} from "@/config";
import {getHeadings} from "@/app/lib/docHelpers";
import {shouldShowPostTOC} from '@/app/lib/postHelpers';
import MarkdownContent from '@/components/Common/MarkdownContent';

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), "data", "website", "compare");
    const files = await fs.readdir(contentDir);
    return files.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ""),
    }));
}

export async function generateMetadata({params}): Promise<Metadata> {
    // Use a default title and description for comparison articles
    return {
        title: `Comparison Article | ${PAGE_SUFFIX}`,
        description: "Detailed comparison article",
    };
}

export default async function CompareArticlePage({params}) {
    const {slug} = params;

    return (
        <section className="pb-[120px] pt-[150px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-8/12">
                        <div>
                            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                                <article className="prose dark:prose-dark flex-1">
                                    <MarkdownContent filePath={`data/website/compare/${slug}.md`}/>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
