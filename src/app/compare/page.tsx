import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import Link from 'next/link';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Compare Alternatives | ${PAGE_SUFFIX}`
};

const ComparePage = () => {
    return (
        <>
            <Breadcrumb pageName="Compare ExamJet Alternatives"/>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/compare/classmarker-vs-examjet" className="hover:underline">
                        Compare ClassMarker with ExamJet
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/compare/classmarker-vs-examjet-summary.md"/>
            </div>

            <div className="container pt-12 pb-1">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                    <Link href="/compare/flexiquiz-vs-examjet" className="hover:underline">
                        Compare FlexiQuiz with ExamJet
                    </Link>
                </h2>
                <MarkdownContent filePath="data/website/compare/flexiquiz-vs-examjet-summary.md"/>
            </div>
        </>
    );
};

export default ComparePage;
