import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Terms of Service | ${PAGE_SUFFIX}`
};

const TermsOfServicePage = () => {
    return (
        <>
            <Breadcrumb pageName="StudyDrome Cloud Terms of Service"/>

            <div className="container">
                <MarkdownContent filePath="data/website/terms/terms-of-service.md"/>
            </div>
        </>
    );
};

export default TermsOfServicePage;
