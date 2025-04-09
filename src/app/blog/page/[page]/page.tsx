import {Metadata} from "next";
import BlogListPage from "@/components/Blog/BlogListPage";
import blogData from '../../../../../data/config/blogData';
import {PAGE_SUFFIX, POSTS_PER_PAGE} from '@/config';

export const metadata: Metadata = {
    title: `eLearning Blog | ${PAGE_SUFFIX}`
};

export async function generateStaticParams() {
    const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
    return Array.from({length: totalPages}, (_, i) => ({
        page: (i + 1).toString(),
    }));
}

const Page = ({params}) => {
    const currentPage = parseInt(params.page, 10) || 1;
    return <BlogListPage currentPage={currentPage}/>;
};

export default Page;
