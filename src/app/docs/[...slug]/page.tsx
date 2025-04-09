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

export async function generateStaticParams() {
    const docsData = (await import('../../../../data/config/docsData')).default;
    const paths: { slug: string[] }[] = [];

    function traverse(items: any[]) {
        for (const item of items) {
            if (item.path !== '/') {
                const slug = item.path.replace(/^\//, '').split('/');
                paths.push({slug});
            }
            if (item.submenu) {
                traverse(item.submenu);
            }
        }
    }

    traverse(docsData);
    return paths;
}

export async function generateMetadata({params}): Promise<Metadata> {
    const slugPath = '/' + params.slug.join('/');
    return {
        title: `${getDocTitle(slugPath)} | ${PAGE_SUFFIX}`,
        description: getDocDescription(slugPath) || 'Documentation page',
    };
}

export default async function DocsPage({params}) {
    const slugPath = '/' + params.slug.join('/');
    const baseDir = path.join(process.cwd(), 'data', 'docs', ...params.slug);
    // Two possibilities:
    // 1. If this docs node has child nodes, its content is in index.md (e.g. data/docs/getting-started/index.md).
    // 2. Otherwise, it is a file like data/docs/getting-started.md.
    const indexFilePath = path.join(baseDir, 'index.md');
    const filePath = baseDir + '.md';

    let fileContents: string;
    try {
        fileContents = await fs.readFile(indexFilePath, 'utf-8');
    } catch (error) {
        try {
            fileContents = await fs.readFile(filePath, 'utf-8');
        } catch (error) {
            return (
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                    <p>The requested documentation page does not exist.</p>
                </div>
            );
        }
    }

    fileContents = addBasePathToImages(fileContents);
    fileContents = addBasePathToUrls(fileContents);
    const headings = getHeadings(fileContents);
    const showTOC = shouldShowDocTOC(slugPath);

    return (
        <div>
            <DocsBreadcrumb pageName={getDocTitle(slugPath)} description={getDocDescription(slugPath)}/>
            <DocContent fileContents={fileContents} headings={headings} showTOC={showTOC}/>
        </div>
    );
}
