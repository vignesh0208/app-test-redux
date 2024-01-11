import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostList } from '../Component';
import { searchTerm } from '../slice/searchSlice';
import {
  postData,
  postState,
  postError,
  fetchPosts,
} from '../slice/fetchPostsSlice';

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector(postState);
  const postDataArray = useSelector(postData);
  const errMessage = useSelector(postError);
  const searchValue = useSelector(searchTerm);

  useEffect(() => {
    if (state === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, state]);

  let HomeContainer;
  if (state === 'loading') {
    HomeContainer = <p>Loading...</p>;
  } else if (state === 'error') {
    HomeContainer = <p>{errMessage}</p>;
  } else if (state === 'success') {
    const filteredData = postDataArray.filter((val) => {
      return val.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    HomeContainer = [...filteredData]
      .reverse()
      .map((data) => <PostList key={data.id} todoData={data} />);
  }

  return <>{HomeContainer}</>;
};

export default Home;
