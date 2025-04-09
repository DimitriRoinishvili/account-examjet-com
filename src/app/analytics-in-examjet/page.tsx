import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Analytics and Reporting in ExamJet | ${PAGE_SUFFIX}`
};

const AnalyticsInExamJetPage = () => {
    return (
        <>
            <Breadcrumb pageName="Analytics and Reporting in ExamJet"/>

            <div className="container">
                <MarkdownContent filePath="data/website/examjet/analytics/analytics.md"/>
            </div>
        </>
    );
};

export default AnalyticsInExamJetPage;
