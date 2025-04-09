import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import {Metadata} from "next";
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Contact Page | ${PAGE_SUFFIX}`
};

const ContactPage = () => {
    return (
        <>
            <Breadcrumb pageName="Contact Page"/>

            <Contact/>
        </>
    );
};

export default ContactPage;
