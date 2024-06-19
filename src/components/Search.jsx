import React, { useState } from 'react'
import { fetchArticles, setPage, setQuery } from '../reducers/newsReducer';
import { useDispatch } from 'react-redux';

const Search = () => {
    const [value,setValue] = useState("");
    const dispatch = useDispatch()

    // Manages the states and fetches the data based on the value provided
    const searchHandler = () => {
      // Sets the redux state based on the current value
        dispatch(setQuery(value))
        dispatch(setPage(1))
        
        dispatch(fetchArticles({category:false,value,page:1}))
    }
  return (
    <div className='bg-white rounded-md px-2 py-1 w-full flex justify-between  md:w-1/2 md:rounded-lg'>
    <input type="text" value={value} onChange={(e) => {setValue(e.target.value) ;console.log(value)}} className='focus:outline-none focus:border-none w-full'/>
    <button onClick={searchHandler} className='bg-blue-500 rounded-md p-1 px-2 text-white'>Search</button>
    </div>
  )
}

export default Search