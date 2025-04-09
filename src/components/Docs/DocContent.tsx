import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import DocsCollapsibleContents from './DocsCollapsibleContents';
import PreviousPageLink from './PreviousPageLink';
import NextPageLink from './NextPageLink';

interface DocContentProps {
    fileContents: string;
    headings: Array<{ level: number; text: string; id: string }>;
    showTOC: boolean;
}

const DocContent: React.FC<DocContentProps> = ({fileContents, headings, showTOC}) => {
    return (
        <>
            {showTOC ? (
                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    {/* Mobile: compact TOC above the article */}
                    <div className="block lg:hidden">
                        <DocsCollapsibleContents headings={headings}/>
                    </div>
                    <article className="prose dark:prose-dark flex-1">
                        <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                            {fileContents}
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
                        {fileContents}
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

export default DocContent;
