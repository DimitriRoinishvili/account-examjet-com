import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Test students’ Knowledge in ExamJet | ${PAGE_SUFFIX}`
};

const TestStudentsKnowledgeInExamJetPage = () => {
    return (
        <>
            <Breadcrumb pageName="Test students’ Knowledge in ExamJet"/>

            <div className="container">
                <MarkdownContent filePath="data/website/examjet/tester/tester.md"/>
            </div>
        </>
    );
};

export default TestStudentsKnowledgeInExamJetPage;
