import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import Image from 'next/image';
import {BASE_PATH, PAGE_SUFFIX} from '@/config';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Home | ${PAGE_SUFFIX}`
};

export default function Home() {
    return (
        <>
            <section id="home"
                     className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">

                {/* Hero Section */}
                <div
                    className="container flex flex-col md:flex-row gap-8 pb-12 bg-gradient-to-r from-blue-200 to-purple-200 p-8 rounded-md shadow-md items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <MarkdownContent filePath="data/website/home/home1.md"/>
                        <div className="pt-4">
                            <Link href="/examjet"
                                  className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                                Discover More
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image src={`${BASE_PATH}/images/home/ExamJet-Demo-1.webp`}
                               alt="Modern problems require modern solutions"
                               width={400}
                               height={270}
                               className="w-[400px] h-[270px]"/>
                    </div>
                </div>


                {/* Header */}
                <div className="container text-center pt-12 pb-1">
                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                        Get ahead in the classroom today with ExamJet!
                    </h1>
                </div>

                {/* Modern Problems Section */}
                <div className="container flex flex-col md:flex-row gap-8 pb-12 m-11">
                    <div className="w-full md:w-2/3">
                        <MarkdownContent filePath="data/website/home/modern-problems-1.md"/>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <Image src={`${BASE_PATH}/images/home/modern-problems.webp`}
                               alt="Modern problems require modern solutions"
                               width={300}
                               height={170}
                               className="w-[300px] h-[170px]"/>
                    </div>
                </div>

                {/* Put Focus Into Teaching Section */}
                <div className="container flex flex-col md:flex-row gap-8 pb-12">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <Image
                            src={`${BASE_PATH}/images/home/put-focus-into-teaching.webp`}
                            alt="Put focus into teaching"
                            width={300}
                            height={170}
                            className="w-[300px] h-[170px]"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <MarkdownContent filePath="data/website/home/puts-focus-into-teaching.md"/>
                    </div>
                </div>

                {/* Create Intuitive Assessments Section */}
                <div className="container text-center pt-12">
                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                        Create Intuitive Assessments
                    </h1>
                </div>
                <div className="container text-left">
                    <MarkdownContent filePath="data/website/home/examjet-has-you-covered.md"/>
                </div>

                <div className="p-12"></div>

                {/* What Can ExamJet Do For You Section */}
                <div className="container text-center pt-12">
                    <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                        What Can ExamJet Do For You?
                    </h2>
                </div>
                <div className="container py-12">
                    {/* Item 1 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-1.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-1.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"
                            />
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-2.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-2.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"
                            />
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-3.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-3.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"/>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-4.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-4.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"/>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-5.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-5.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"/>
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-6.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-6.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"/>
                        </div>
                    </div>

                    {/* Item 7 */}
                    <div className="flex flex-col md:flex-row gap-8 py-12">
                        <div className="w-full md:w-2/3">
                            <MarkdownContent filePath="data/website/home/what-can-examjet-do-7.md"/>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image src={`${BASE_PATH}/images/home/what-can-examjet-do-7.webp`}
                                   alt="What Can ExamJet Do For You?"
                                   width={300}
                                   height={170}
                                   className="w-[300px] h-[170px]"/>
                        </div>
                    </div>
                </div>

                {/* ExamJet Core Features Section */}
                <div className="container text-center pt-12">
                    <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
                        ExamJet Core Features
                    </h2>
                </div>
                <div className="container pt-2 bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-md shadow-md">
                    {/* First row of features */}
                    <div className="flex flex-col md:flex-row gap-8 py-12 items-center">
                        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2">
                            <Image src={`${BASE_PATH}/images/home/manage-question-banks.webp`}
                                   alt="Manage Question Banks"
                                   width={50}
                                   height={50}
                                   className="w-[50px] h-[50px]"/>
                            <div className="text-center md:text-left">
                                <h3 className="ont-xl mb-4 font-bold text-2xl">
                                    Manage Question Banks
                                </h3>
                                <p>
                                    Question Banks make managing and storing thousands of questions easier and more
                                    efficient than ever before. Not only can you categorize each question, but also save
                                    all associated data with it in one convenient location.
                                </p>
                                <div className="py-4">
                                    <Link href="/question-banks-in-examjet"
                                          className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                                        More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2">
                            <Image src={`${BASE_PATH}/images/home/manage-student-groups.webp`}
                                   alt="Manage Student Groups"
                                   width={50}
                                   height={50}
                                   className="w-[50px] h-[50px]"
                            />
                            <div className="text-center md:text-left">
                                <h3 className="ont-xl mb-4 font-bold text-2xl">
                                    Manage Student Groups
                                </h3>
                                <p>
                                    Organize students according to their preferences and needs, or by organization
                                    structure. This can help with assigning quizzes, tracking progress, and analyzing
                                    results. Students may be added to any number of student groups.
                                </p>
                                <div className="py-4">
                                    <Link href="/student-groups-in-examjet"
                                          className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                                        More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second row of features */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2">
                            <Image src={`${BASE_PATH}/images/home/publish-tests.webp`}
                                   alt="Publish Tests"
                                   width={50}
                                   height={50}
                                   className="w-[50px] h-[50px]"/>
                            <div className="text-center md:text-left">
                                <h3 className="ont-xl mb-4 font-bold text-2xl">
                                    Publish Tests
                                </h3>
                                <p>
                                    Make the test available to the public, and set desired options and time limitations.
                                    Combine multiple question banks and student groups, select the proper grading scale
                                    and define the test-availability period when publishing.
                                </p>
                                <div className="py-4">
                                    <Link href="/tests-in-examjet"
                                          className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                                        More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2">
                            <Image src={`${BASE_PATH}/images/home/analyze-results.webp`}
                                   alt="Analyzing Results"
                                   width={50}
                                   height={50}
                                   className="w-[50px] h-[50px]"
                            />
                            <div className="text-center md:text-left">
                                <h3 className="ont-xl mb-4 font-bold text-2xl">
                                    Analyze Results
                                </h3>
                                <p>
                                    Test analytics provides real-time data, Use it to modify teaching practices,
                                    pinpoint areas of improvement, and identify successful interventions.
                                </p>
                                <div className="py-4">
                                    <Link href="/analytics-in-examjet"
                                          className="rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                                        More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
