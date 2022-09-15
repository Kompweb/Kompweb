import React from 'react';
import Layout from './layout';
import { BugOutlined } from '@ant-design/icons';
import LightOn from '../src/features/LightOn';
// import Link from 'next/link';
// import Date from '../src/components/date';
// import BlogPage from '../pages/index';
// import { getSortedPostsData } from '../src/lib/posts';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Blog() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <>
      <div>
        <h1>BOG</h1>
        <Layout home>
          <div>
            <section>
              <h2>My Blog</h2>
              {/* <ul>
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
              </ul> */}
            </section>
          </div>
        </Layout>
        <BugOutlined
          style={{
            fontSize: 64,
            backgroundColor: '#61dafb',
            borderRadius: '8px',
            marginBottom: '200px',
          }}
        />
        <p className="express-content">
          {!data ? 'Loading... dont wait' : data}
        </p>
        <LightOn />
        {/* <BlogPage /> */}
      </div>
    </>
  );
}
