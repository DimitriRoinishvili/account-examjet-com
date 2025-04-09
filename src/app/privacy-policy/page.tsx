import Breadcrumb from '@/components/Common/Breadcrumb';
import MarkdownContent from '@/components/Common/MarkdownContent';
import {Metadata} from 'next';
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `Privacy Policy | ${PAGE_SUFFIX}`
};

const PrivacyPolicyPage = async () => {
    return (
        <>
            <Breadcrumb pageName="Privacy Policy"/>
            <div className="container">
                <MarkdownContent filePath="data/website/terms/privacy-policy.md" />
            </div>
        </>
    );
};

export default PrivacyPolicyPage;
