import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, fetchArticles } from '../reducers/newsReducer';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages,articles } = useSelector((state) => state.news);

  // Handles the current page change
  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchArticles({category : false,value : false}));
  };

  return ( <div className="flex justify-between px-4 py-2 md:justify-center md:gap-20">
      <button
        className='bg-blue-500 p-2 rounded-md text-white text-sm disabled:cursor-not-allowed disabled:bg-gray-400'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        className='bg-blue-500 py-2 px-5 rounded-md text-white text-sm disabled:cursor-not-allowed disabled:bg-gray-400'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
   )
  
};

export default Pagination;
