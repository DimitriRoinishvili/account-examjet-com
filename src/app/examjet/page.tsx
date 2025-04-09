import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import Link from 'next/link';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `ExamJet Overview | ${PAGE_SUFFIX}`
};

const ExamJetPage = () => {
    return (
        <>
            <Breadcrumb pageName="ExamJet Overview"/>

            <div className="container">
                <MarkdownContent filePath="data/website/examjet/overview-header.md"/>
            </div>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/question-banks-in-examjet"
                          className="hover:underline">
                        Manage Question Banks
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/examjet/manage-question-banks.md"/>
            </div>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/student-groups-in-examjet"
                          className="hover:underline">
                        Manage Student Groups
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/examjet/manage-student-groups.md"/>
            </div>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/tests-in-examjet"
                          className="hover:underline">
                        Publish Tests
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/examjet/publish-tests.md"/>
            </div>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/analytics-in-examjet"
                          className="hover:underline">
                        Analyze Results
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/examjet/analyze-results.md"/>
            </div>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/test-students-in-examjet"
                          className="hover:underline">
                        Test Students’ Knowledge
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/examjet/tester.md"/>
            </div>
        </>
    );
};

export default ExamJetPage;
