import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import {Metadata} from "next";
import MarkdownContent from '@/components/Common/MarkdownContent';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `About | ${PAGE_SUFFIX}`
};

const AboutPage = () => {
    return (
        <>
            <Breadcrumb pageName="About Page"
                        description=""/>

            <AboutSectionOne/>
            <AboutSectionTwo/>
        </>
    );
};

export default AboutPage;
