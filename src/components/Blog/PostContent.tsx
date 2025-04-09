import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import DocsCollapsibleContents from '@/components/Docs/DocsCollapsibleContents';
import PreviousPageLink from '@/components/Docs/PreviousPageLink';
import NextPageLink from '@/components/Docs/NextPageLink';

interface PostContentProps {
    content: string;
    headings?: Array<{ level: number; text: string; id: string }>;
    showTOC?: boolean;
}

const PostContent: React.FC<PostContentProps> = ({content, headings = [], showTOC = false,}) => {
    return (
        <>
            {showTOC && headings.length > 0 ? (
                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    {/* Mobile: compact TOC above the article */}
                    <div className="block lg:hidden">
                        <DocsCollapsibleContents headings={headings}/>
                    </div>
                    <article className="prose dark:prose-dark flex-1">
                        <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                            {content}
                        </ReactMarkdown>
                    </article>
                    {/* Desktop: full TOC as a sidebar */}
                    <nav className="hidden lg:block flex-shrink-0 w-64">
                        <div className="sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto">
                            <DocsCollapsibleContents headings={headings}/>
                        </div>
                    </nav>
                </div>
            ) : (
                // Render full width article if TOC is disabled.
                <article className="prose dark:prose-dark w-full mt-8">
                    <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                        {content}
                    </ReactMarkdown>
                </article>
            )}

            <div className="flex items-center mt-8">
                <PreviousPageLink/>
                <div className="ml-auto">
                    <NextPageLink/>
                </div>
            </div>
        </>
    );
};

export default PostContent;
