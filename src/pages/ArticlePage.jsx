import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocalStorage } from "@uidotdev/usehooks";


const DetailPage = () => {
  const { title } = useParams();

  // Finds the article by matching the title from the articles stored in store with the title obtained from the params
  const article = useSelector((state) =>
    state.news.articles.find(article => article.title === title)
  );  

  // Gets the article info stored in the local storage or is null 
  const [articleInfo, setArticleInfo] = useLocalStorage('article',null)

  useEffect(() =>{
    // Sets the article info from the redux store if not found in the local storage or if the title of the article in local storage doesnt match with the title obtained through params
    if(articleInfo === null || articleInfo.title !== title)
    {
      setArticleInfo(article)
    }
  },[])

  // If article info is not found
  if (!articleInfo) return <p>Article not found</p>;

  return (
    <div className="flex justify-center items-center flex-col" >
      <header className='w-full flex justify-between bg-blue-500 items-center px-4 py-2'>
        <h1 className='text-white font-bold text-lg'>News Portal</h1>
      </header>
      <div className="flex flex-col justify-center items-center max-w-[1400px]">
      <div className='py-10 px-2 flex flex-col justify-center items-center gap-5 md:px-10 lg:px-52'>
      <h1 className='text-xl font-bold text-center'>{articleInfo.title}</h1>
      <img src={articleInfo.urlToImage} alt={articleInfo.title} className='md:w-3/4 lg:w-1/2' />
      <p>{articleInfo.description}</p>
      </div>
    </div>
    </div>
  );
};

export default DetailPage;
