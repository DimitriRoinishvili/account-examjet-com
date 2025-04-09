import blogData from '../../../data/config/blogData';

export function shouldShowPostTOC(slug: string): boolean {
    const post = blogData.find((post) => post.path === slug);
    if (post) {
        return post.showTOC !== false;
    }
    return true;
}
