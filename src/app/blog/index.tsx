import {GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
import {getSortedPostsData, PostSummary} from '@/lib/posts';

interface BlogProps {
    allPostsData: PostSummary[];
}

const Blog: NextPage<BlogProps> = ({allPostsData}) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {allPostsData.map(({slug, date, title}) => (
                    <li key={slug}>
                        <Link href={`/blog/${slug}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        <small>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default Blog;
