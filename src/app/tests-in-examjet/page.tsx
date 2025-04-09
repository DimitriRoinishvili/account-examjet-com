import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `How tests are delivered to students in ExamJet | ${PAGE_SUFFIX}`
};

const TestManagementInExamJetPage = () => {
    return (
        <>
            <Breadcrumb pageName="How tests are delivered to students in ExamJet"/>

            <div className="container">
                <MarkdownContent filePath="data/website/examjet/tests/tests.md"/>
            </div>
        </>
    );
};

export default TestManagementInExamJetPage;
