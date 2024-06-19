import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useDispatch, useSelector } from 'react-redux';
import { setReduxCategory } from '../reducers/newsReducer';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import LoadingSkeleton from '../components/LoadingSkeleton';

const ArticleList = lazy(() => import('../components/ArticleList')) ;
const Home = () => {
  const dispatch = useDispatch()
  // gets the current category from the store
  const currentCategory = useSelector((state) => state.news.currentCategory)

  // gets the category from the local storage if available , or gets it from the current category obtained from the store
  const [category,setCategory] = useLocalStorage('category' , currentCategory)

  // Gets all the categories present from the store
  const categories = useSelector((state) => state.news.categories)

   // updates the redux state whenever category changes 
  useEffect(() => {
    dispatch(setReduxCategory(category))
  },[category])


  return (
    <div className="flex justify-center items-center flex-col" >
    <header className='w-full flex justify-between bg-blue-500 items-center px-4 py-2 flex-wrap gap-5'>
      <Link to={'/'}>
        <h1 className='text-white font-bold text-lg cursor-pointer'>News Portal</h1>
        </Link>
        <Search/>
        <div className='flex flex-col justify-center gap-2'><h3 className='font-medium text-white'>Category</h3>
        <select onChange={(e) => {setCategory(e.target.value)}} value={category} className='outline-none border-none rounded-md '>
          {categories.map((cat) => (
            <option key={cat} value={cat} className='text-sm '>{cat}</option>
          ))}
        </select>
        </div>
      </header> 
      {/* Handles the loading states while fetching */}
      <Suspense fallback={<LoadingSkeleton/>}>
       <ArticleList category={category} />
       </Suspense>
       
     </div>
  );
};

export default Home;
