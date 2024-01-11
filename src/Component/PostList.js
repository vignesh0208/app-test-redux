import React from 'react';
import PostUsers from './PostUsers';

const PostList = ({ todoData }) => {
  return (
    <section className='border-[1px] border-[#c5c9cd] p-4 text-[#262626] text-sm rounded mb-2 last:mb-0'>
      <div className='text-[14px] text-black'>{todoData.title}</div>
      <div>
        <PostUsers userId={todoData.userId} />
      </div>
    </section>
  );
};

export default PostList;
