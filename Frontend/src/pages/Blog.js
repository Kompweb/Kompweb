import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import LightOn from '../Projects/LightOn';
import Layout from '../blog/layout';
import Tblog from '../blog/Tblog/index';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:5000/api/users/')
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <>
      <Layout home>
        <div>
          <section>
            <h1>REST API</h1>
            <p>A simple blog using Axios REST and CRUD operations</p>
          </section>
          <Tblog />
          <p className="express-content">
            {!data ? 'Loading... dont wait' : data}
          </p>
        </div>
        <LightOn />
      </Layout>
    </>
  );
}
