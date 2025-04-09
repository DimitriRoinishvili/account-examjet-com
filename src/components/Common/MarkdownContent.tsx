import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

const MarkdownContent = async ({filePath, className = 'prose dark:prose-dark'}) => {
    const absolutePath = path.join(process.cwd(), filePath);
    let content = '';

    try {
        content = await fs.readFile(absolutePath, 'utf-8');
    } catch (error) {
        console.error('Error reading content:', error);
        return <div>Error loading content.</div>;
    }

    return (
        <article className={`${className} w-full max-w-full`}>
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default MarkdownContent;
