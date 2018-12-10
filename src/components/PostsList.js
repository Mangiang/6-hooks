import React from 'react';
import Post from './Post';

const PostsList = ({ posts = [] }) => (
  <ul style={{ listStyle: 'none', width: '800px' }}>
    {posts.map(p => (
      <Post key={p.id} data={p} />
    ))}
  </ul>
);

export default PostsList;
