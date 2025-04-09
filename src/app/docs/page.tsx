import fs from 'fs/promises';
import path from 'path';
import {Metadata} from 'next';
import DocsBreadcrumb from '@/components/Docs/DocsBreadcrumb';
import DocContent from '@/components/Docs/DocContent';
import {
    getDocTitle,
    getDocDescription,
    getHeadings,
    shouldShowDocTOC,
    addBasePathToImages,
    addBasePathToUrls
} from '@/app/lib/docHelpers';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `${getDocTitle('/')} | ${PAGE_SUFFIX}`,
    description: getDocDescription('/') || 'Welcome to our Knowledge Base. Please select an article from the menu.',
};

export default async function DocsHome() {
    const slug = '/';
    const filePath = path.join(process.cwd(), 'data', 'docs', 'index.md');
    let fileContents = await fs.readFile(filePath, 'utf-8');
    const headings = getHeadings(fileContents);
    const showTOC = shouldShowDocTOC(slug);
    fileContents = addBasePathToImages(fileContents);
    fileContents = addBasePathToUrls(fileContents);

    return (
        <div>
            <DocsBreadcrumb pageName={getDocTitle(slug)} description={getDocDescription(slug)}/>
            <DocContent fileContents={fileContents} headings={headings} showTOC={showTOC}/>
        </div>
    );
}
