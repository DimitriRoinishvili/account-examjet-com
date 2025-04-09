import Breadcrumb from '@/components/Common/Breadcrumb';
import MarkdownContent from '@/components/Common/MarkdownContent';
import {Metadata} from 'next';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Cookies & Tracking Notice | ${PAGE_SUFFIX}`
};

const CookiesPage = async () => {
    return (
        <>
            <Breadcrumb pageName="Cookies & Tracking Notice"/>
            <div className="container">
                <MarkdownContent filePath="data/website/terms/cookies.md" />
            </div>
        </>
    );
};

export default CookiesPage;
