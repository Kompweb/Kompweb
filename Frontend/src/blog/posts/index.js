import Link from 'next/link';
import Date from '../src/components/date';
// import Names from './Names';
import { getSortedPostsData } from '../src/lib/posts';
// import Button from "./LikeButton";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function BlogPage({ allPostsData }) {
  return (
    <>
      <div>
        <h2>My Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {/* <Names /> */}
        {/* <Button /> */}
      </div>
    </>
  );
}
