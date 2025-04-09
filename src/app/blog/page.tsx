import {Metadata} from "next";
import BlogListPage from "@/components/Blog/BlogListPage";
import {PAGE_SUFFIX} from '@/config';

export const metadata: Metadata = {
    title: `eLearning Blog | ${PAGE_SUFFIX}`
};

const Page = () => {
    return <BlogListPage currentPage={1}/>;
};

export default Page;
