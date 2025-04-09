import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";
import Contact from '@/components/Contact';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Contact Us | ${PAGE_SUFFIX}`
};

const ContactUsPage = () => {
    return (
        <>
            <Breadcrumb pageName="Contact Us"/>

            <div className="container">
                <Contact />
            </div>
        </>
    );
};

export default ContactUsPage;
