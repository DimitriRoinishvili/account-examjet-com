import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMetaData {
    title: string;
    date: string;
    excerpt?: string;
}

export interface PostSummary extends PostMetaData {
    slug: string;
}

// Get sorted posts data
export function getSortedPostsData(): PostSummary[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostSummary[] = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data,
        } as PostSummary;
    });
    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get list of all post slugs for dynamic routing
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }));
}

// Get post data by slug and convert Markdown to HTML
export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    // Dynamically import remark and remark-html to convert Markdown to HTML
    const { remark } = await import('remark');
    const html = (await import('remark-html')).default;
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}
