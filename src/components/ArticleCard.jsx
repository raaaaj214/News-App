import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from "../assets/blank-image.jpg"

// Card displaying the summary of each article 
const ArticleCard = ({ article }) => (
  <div className="border border-solid rounded-md">
    <Link to={`/article/${article.title}`}>
    <img src={article.urlToImage || defaultImage} alt={article.title} className='w-full h-[200px] object-cover rounded-md rounded-b-none'/>
    <div className='flex flex-col p-4 gap-4'>
    <h3 className='text-lg font-bold'>{article.title}</h3>
    <p className='text-sm'>{article.description}</p>
    </div>
    </Link>
  </div>
);

export default ArticleCard;
