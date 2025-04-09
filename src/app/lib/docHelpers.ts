import docsData from '../../../data/config/docsData';
import {BASE_PATH} from '@/config';

export function getDocTitle(slug: string): string {
    let doc = docsData.find((doc) => doc.path === slug);
    if (doc) return doc.title;
    for (const parent of docsData) {
        if (parent.submenu) {
            const subdoc = parent.submenu.find((sub) => sub.path === slug);
            if (subdoc) return subdoc.title;
        }
    }
    return slug;
}

export function getDocDescription(slug: string): string | undefined {
    let doc = docsData.find((doc) => doc.path === slug);
    if (doc) return doc.description;
    for (const parent of docsData) {
        if (parent.submenu) {
            const subdoc = parent.submenu.find((sub) => sub.path === slug);
            if (subdoc) return subdoc.description;
        }
    }
    return undefined;
}

export function shouldShowDocTOC(slug: string): boolean {
    const doc = docsData.find((doc) => doc.path === slug);
    if (doc) {
        return doc.showTOC !== false;
    }
    for (const parent of docsData) {
        if (parent.submenu) {
            const subPage = parent.submenu.find((sub) => sub.path === slug);
            if (subPage) {
                return subPage.showTOC !== false;
            }
        }
    }
    return true;
}

export function getHeadings(markdown: string) {
    const headingRegex = /^(#{1,3})\s+(.*)$/gm;
    const headings: Array<{ level: number; text: string; id: string }> = [];
    let match;
    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        headings.push({level, text, id});
    }
    return headings;
}

export function addBasePathToImages(content: string): string {
    return content.replace(/(!\[[^\]]*\]\()\/(.*?)\)/g, (match, p1, p2) => {
        // Check if the URL already starts with the base path (without the leading slash)
        if (p2.startsWith(BASE_PATH.replace(/^\//, ''))) {
            return match;
        }
        return `${p1}${BASE_PATH}/${p2})`;
    });
}

export function addBasePathToUrls(content: string): string {
    return content.replace(/(\[[^\]]*\]\()\/(.*?)\)/g, (match, p1, p2) => {
        if (p2.startsWith(BASE_PATH.replace(/^\//, ''))) {
            return match;
        }
        return `${p1}${BASE_PATH}/${p2})`;
    });
}
