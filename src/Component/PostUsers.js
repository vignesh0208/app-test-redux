import React from 'react';
import { useSelector } from 'react-redux';
import { seletedAllUsers } from '../slice/fetchUsersSlice';

const PostUsers = ({ userId }) => {
  const users = useSelector(seletedAllUsers);

  const userName = users.find((user) => user.id === userId);

  return (
    <div className='text-[12px]'>
      by {userName.id ? userName.name : 'Unknown User'}
    </div>
  );
};

export default PostUsers;
