import '../../styles/blog.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Latin BLOG posts API
const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const App = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await client.get('?_limit=3');
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  // Delete with Axios
  const deletePost = async id => {
    await client.delete(`${id}`);
    setPosts(
      posts.filter(post => {
        return post.id !== id;
      })
    );
  };

  // Post with Axios
  const addPosts = async (title, body) => {
    let response = await client.post('', {
      title: title,
      body: body,
    });
    setPosts(posts => [response.data, ...posts]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <div className="app">
      <div className="posts-container">
        {posts.map(post => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="svgicons">
                <svg
                  name="Edit"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  //   onClick={}
                >
                  <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                <svg
                  name="Delete"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  onClick={() => deletePost(post.id)}
                >
                  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      <div className="add-post-container">
        <h3>Add Blog</h3>
        <form onSubmit={handleSubmit}>
          {/* <p>Title:</p> */}
          <input
            type="title"
            name="Title"
            label="Title"
            title="Create a new Title"
            // className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <textarea
            name="body"
            className="form-control"
            id=""
            cols="10"
            rows="8"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
          <button style={{ width: 200 }} type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
