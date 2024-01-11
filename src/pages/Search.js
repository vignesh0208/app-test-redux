import React from 'react';
import Input from '../Component/Input';
import { useSelector, useDispatch } from 'react-redux';
import { searchTerm, handleSearchTerm } from '../slice/searchSlice.js';

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(searchTerm);

  const handleSearchTitle = (e) => {
    dispatch(handleSearchTerm(e.target.value));
  };

  return (
    <>
      <Input
        inputType='text'
        inputName='search'
        inputPlaceholder='Search title'
        inputValue={searchValue}
        handleChange={handleSearchTitle}
      />
    </>
  );
};

export default Search;
