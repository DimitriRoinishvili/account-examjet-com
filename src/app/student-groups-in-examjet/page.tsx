import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `How to manage students in ExamJet | ${PAGE_SUFFIX}`
};

const StudentGroupsInExamJetPage = () => {
    return (
        <>
            <Breadcrumb pageName="How to manage students in ExamJet"/>

            <div className="container">
                <MarkdownContent filePath="data/website/examjet/student-groups/student-groups.md"/>
            </div>
        </>
    );
};

export default StudentGroupsInExamJetPage;
