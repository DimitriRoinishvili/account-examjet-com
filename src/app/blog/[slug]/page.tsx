import fs from "fs/promises";
import path from "path";
import {Metadata} from "next";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import PostContent from "@/components/Blog/PostContent";
import DocsCollapsibleContents from "@/components/Docs/DocsCollapsibleContents";
import blogData from "../../../../data/config/blogData";
import authorData from "../../../../data/config/authorData";
import {BASE_PATH, PAGE_SUFFIX} from "@/config";
import {getHeadings} from "@/app/lib/docHelpers";
import {shouldShowPostTOC} from '@/app/lib/postHelpers';

const getPostTitle = (slug: string): string => {
    const blog = blogData.find((b) => b.path === `/${slug}`);
    return blog ? blog.title : "Blog Post";
};

const getPostDescription = (slug: string): string => {
    const blog = blogData.find((b) => b.path === `/${slug}`);
    return blog ? blog.paragraph || "" : "";
};

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), "data", "blog");
    const files = await fs.readdir(contentDir);
    return files.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ""),
    }));
}

export async function generateMetadata({params}): Promise<Metadata> {
    const {slug} = params;
    const blog = blogData.find((b) => b.path === `/${slug}`);
    const author = blog ? authorData.find((a) => a.id === blog.authorId) : null;
    // Construct the image URL; adjust if blog.image is already absolute.
    const imageUrl = blog?.image ? `https://studydrome.com${blog.image}` : undefined;
    const canonicalUrl = `https://studydrome.com/blog/${slug}/`;

    return {
        title: `${getPostTitle(slug)} | ${PAGE_SUFFIX}`,
        description: getPostDescription(slug),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${getPostTitle(slug)} | ${PAGE_SUFFIX}`,
            description: getPostDescription(slug),
            url: canonicalUrl,
            type: "article",
            images: imageUrl
                ? [
                    {
                        url: imageUrl,
                        secureUrl: imageUrl,
                        width: 600,
                        height: 337,
                        alt: blog?.title || "Blog image",
                        type: "image/png",
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: `${getPostTitle(slug)} | ${PAGE_SUFFIX}`,
            description: getPostDescription(slug),
            images: imageUrl ? [imageUrl] : undefined,
        },
    };
}

export default async function PostPage({params}) {
    const {slug} = params;
    const filePath = path.join(process.cwd(), "data", "blog", `${slug}.md`);
    const fileContents = await fs.readFile(filePath, "utf-8");

    const headings = getHeadings(fileContents);
    const showTOC = shouldShowPostTOC(`/${slug}`);

    const blog = blogData.find((b) => b.path === `/${slug}`);
    const author = blog ? authorData.find((a) => a.id === blog.authorId) : null;
    const twitterAuthor = author ? author.name : "Unknown";

    return (
        <>
            {/* Additional Twitter meta tags not supported via metadata API */}
            <Head>
                <meta name="twitter:label1" content="Written by"/>
                <meta name="twitter:data1" content={twitterAuthor}/>
                <meta name="twitter:label2" content="Time to read"/>
                <meta name="twitter:data2" content="10 minutes"/>
            </Head>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                {/* Post Title */}
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                    {blog ? blog.title : getPostTitle(slug)}
                                </h2>

                                {/* Post Content with TOC */}
                                {showTOC ? (
                                    <div className="flex flex-col lg:flex-row gap-8 mt-8">
                                        {/* Mobile: compact TOC above the article */}
                                        <div className="block lg:hidden">
                                            <DocsCollapsibleContents headings={headings}/>
                                        </div>
                                        <article className="prose dark:prose-dark flex-1">
                                            <PostContent content={fileContents}/>
                                        </article>
                                        {/* Desktop: full TOC as a sidebar */}
                                        <nav className="hidden lg:block flex-shrink-0 w-64">
                                            <div className="sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto">
                                                <DocsCollapsibleContents headings={headings}/>
                                            </div>
                                        </nav>
                                    </div>
                                ) : (
                                    // Render full width article if no TOC.
                                    <article className="prose dark:prose-dark w-full mt-8">
                                        <PostContent content={fileContents}/>
                                    </article>
                                )}

                                {/* Post Footer */}
                                <div
                                    className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10 mt-8">
                                    <div className="flex flex-wrap items-center">
                                        <div className="mb-5 mr-10 flex items-center">
                                            <div className="mr-4">
                                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                                    {author && (
                                                        <Image
                                                            src={`${BASE_PATH}/${author.image}`}
                                                            alt={author.name}
                                                            fill
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="mb-1 text-base font-medium text-body-color">
                                                    By{" "}
                                                    <div>
                                                        {author ? author.name : "Unknown Author"}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-5 flex items-center">
                                            <div
                                                className="mr-5 flex items-center text-base font-medium text-body-color">
                                                Published: {blog ? blog.publishDate : "N/A"}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mb-5 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                                        {blog && blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Tag"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
