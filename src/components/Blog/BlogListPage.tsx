import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import Link from "next/link";
import blogData from "../../../data/config/blogData";
import {POSTS_PER_PAGE} from "@/config";

interface BlogListPageProps {
    currentPage: number;
}

const sortedBlogData = [...blogData].sort((a, b) => b.id - a.id);

const BlogListPage: React.FC<BlogListPageProps> = ({currentPage}) => {
    const totalPages = Math.ceil(sortedBlogData.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentBlogs = sortedBlogData.slice(startIndex, startIndex + POSTS_PER_PAGE);

    let windowPages: number[] = [];
    if (totalPages <= 5) {
        windowPages = Array.from({length: totalPages}, (_, i) => i + 1);
    } else if (currentPage <= 3) {
        windowPages = [1, 2, 3, 4];
    } else if (currentPage >= totalPages - 2) {
        windowPages = [
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
        ];
    } else {
        windowPages = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    }

    return (
        <>
            <Breadcrumb pageName="eLearning Blog"/>

            <section className="pb-[120px] pt-[120px]">
                <div className="container px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentBlogs.map((blog) => (
                            <div key={blog.id}>
                                <SingleBlog blog={blog}/>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-wrap justify-center pt-8" data-wow-delay=".15s">
                        {/* First & Prev */}
                        {currentPage > 1 ? (
                            <>
                                <li className="mx-1 list-none">
                                    <Link href={`/blog/page/1`}
                                          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                                        First
                                    </Link>
                                </li>
                                <li className="mx-1 list-none">
                                    <Link href={`/blog/page/${currentPage - 1}`}
                                          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                                        Prev
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mx-1 list-none">
                                    <div
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color opacity-50 cursor-not-allowed">
                                        First
                                    </div>
                                </li>
                                <li className="mx-1 list-none">
                                    <div
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color opacity-50 cursor-not-allowed">
                                        Prev
                                    </div>
                                </li>
                            </>
                        )}

                        {/* Page Numbers */}
                        {windowPages.map((page) => (
                            <li key={page} className="mx-1 list-none">
                                {page === currentPage ? (
                                    <div
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm bg-primary text-white">
                                        {page}
                                    </div>
                                ) : (
                                    <Link href={`/blog/page/${page}`}
                                          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                                        {page}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* Ellipsis and Last */}
                        {totalPages > windowPages[windowPages.length - 1] && (
                            <>
                                <li className="mx-1 list-none flex h-9 min-w-[36px] items-center justify-center px-4 text-sm text-body-color">
                                    ...
                                </li>
                                <li className="mx-1 list-none">
                                    <Link href={`/blog/page/${totalPages}`}
                                          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                                        {totalPages}
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Next & Last */}
                        {currentPage < totalPages ? (
                            <>
                                <li className="mx-1 list-none">
                                    <Link href={`/blog/page/${currentPage + 1}`}
                                          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                                        Next
                                    </Link>
                                </li>
                                <li className="mx-1 list-none">
                                    <Link href={`/blog/page/${totalPages}`}
                                          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white">
                                        Last
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mx-1 list-none">
                                    <div
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color opacity-50 cursor-not-allowed">
                                        Next
                                    </div>
                                </li>
                                <li className="mx-1 list-none">
                                    <div
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color opacity-50 cursor-not-allowed">
                                        Last
                                    </div>
                                </li>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogListPage;
