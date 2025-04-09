import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Company | ${PAGE_SUFFIX}`
};

const CompanyPage = () => {
    return (
        <>
            <Breadcrumb pageName="Company"/>

            <div className="container">
                <MarkdownContent filePath="data/website/about/company.md"/>
            </div>
        </>
    );
};

export default CompanyPage;
