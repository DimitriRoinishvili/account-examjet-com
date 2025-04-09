import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `How questions are organized in ExamJet | ${PAGE_SUFFIX}`
};

const QuestionBanksInExamJetPage = () => {
    return (
        <>
            <Breadcrumb pageName="How questions are organized in ExamJet"/>

            <div className="container">
                <MarkdownContent filePath="data/website/examjet/question-banks/question-banks.md"/>
            </div>
        </>
    );
};

export default QuestionBanksInExamJetPage;
