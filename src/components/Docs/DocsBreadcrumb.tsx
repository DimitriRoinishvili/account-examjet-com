import Link from "next/link";
import docsData from '../../../data/config/docsData';

interface BreadcrumbProps {
    pageName: string;
    description?: string;
}

const DocsBreadcrumb = ({ pageName, description }: BreadcrumbProps) => {
    // Extract the current path from the pageName
    // This assumes that pageName corresponds to the slug parameter
    const currentSlug = pageName.toLowerCase();

    // Function to find the breadcrumb path for the current page
    const getBreadcrumbPath = () => {
        // Check if it's a top-level page
        const topLevelDoc = docsData.find(doc =>
            doc.path === `/${currentSlug}` || // Match by path
            doc.title.toLowerCase() === currentSlug // Match by title (fallback)
        );

        if (topLevelDoc) {
            return [
                { title: 'Docs', path: '/docs', isLast: false },
                { title: topLevelDoc.title, path: `/docs${topLevelDoc.path}`, isLast: true }
            ];
        }

        // Check if it's a subpage
        for (const parent of docsData) {
            if (parent.submenu) {
                const subDoc = parent.submenu.find(sub =>
                    sub.path === `/${currentSlug}` || // Match by path
                    sub.title.toLowerCase() === currentSlug // Match by title (fallback)
                );

                if (subDoc) {
                    return [
                        { title: 'Docs', path: '/docs', isLast: false },
                        { title: parent.title, path: parent.path ? `/docs${parent.path}` : '#', isLast: false },
                        { title: subDoc.title, path: `/docs${subDoc.path}`, isLast: true }
                    ];
                }
            }
        }

        // Fallback for pages not found in docsData
        return [
            { title: 'Docs', path: '/docs', isLast: false },
            { title: pageName, path: `/docs/${currentSlug}`, isLast: true }
        ];
    };

    const breadcrumbs = getBreadcrumbPath();

    return (
        <section className="">
            <div className="mx-auto">
                {/* Breadcrumb Navigation */}
                <div className="mb-6 text-sm">
                    <ul className="flex items-center flex-wrap text-gray-500">
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2">/</span>}
                                {crumb.isLast ? (
                                    <span className="text-gray-700">{crumb.title}</span>
                                ) : (
                                    <Link href={crumb.path} className="hover:text-gray-800">
                                        {crumb.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Page Title & Optional Description */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{pageName}</h1>
                    {description && <p className="mt-2 text-gray-600">{description}</p>}
                </div>
            </div>
        </section>
    );
};

export default DocsBreadcrumb;
