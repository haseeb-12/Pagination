import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='grid'>
      {posts.map(post => {
        return (
          <div className="card">
            <div className="container">
              <img src={post.thumbnail} alt="" />
              <div className="meta">
                <h2>{post.title}</h2>
                <p> {post.description} </p>
                <button type="button">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>

  );
};

export default Posts;
