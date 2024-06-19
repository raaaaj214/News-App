import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../reducers/newsReducer';
import ArticleCard from "./ArticleCard"
import LoadingSkeleton from './LoadingSkeleton';
import Pagination from './Pagination';

const ArticleList = ({ category }) => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  // updates the redux state whenever category changes 
  useEffect(() => {
    dispatch(fetchArticles({category:category,value:""}));
  }, [category]);

  // loading state while fetching the data
  if (status === 'loading') {
    return <LoadingSkeleton />;
  }

  // state when an error occurs
  if (status === 'failed') {
    return <LoadingSkeleton />;
  }

  // List of cards that displays the summary of the cards
  return (
    <>
    <div className="max-w-[1400px] grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-4">
      {articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))} 
    </div>
    <Pagination />
    </>
  );
};

export default ArticleList;
