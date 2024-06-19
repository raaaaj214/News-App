import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// inital state 
const initialState = {
  articles: [],
  status: 'idle',
  error: null,
  currentCategory : "Business",
  q : "",
  categories: ['Business', 'Technology', 'Entertainment', "General","Health","Science","Sports"],
  currentPage: 1,
  totalPages: 1,
};

// fetches the data from the api
export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({category,value},{ getState }) => {

    const { currentPage, currentCategory,q} = getState().news;

    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country : 'in',
        // uses value if provided or uses the one available in the store
        q : value || q,
        // uses value if provided or uses the one available in the store
        category : category || currentCategory,
        page: currentPage,
        pageSize : 20,
        apiKey: 'aab31209bd0d4df79a464bf063ef99a7',
      },
    });
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload
    },
    setQuery(state,action){
      state.q = action.payload
    },
    setReduxCategory(state,action) {
      state.currentCategory = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;

        // Makes sure that total page count is only done whenever the tab is on the first page 
        if(state.currentPage === 1)
          {
            state.totalPages = Math.ceil(action.payload.totalResults / 20);
          }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        toast.error("Something went wrong")
      });
  },
});

export const { setPage , setReduxCategory , setQuery } = newsSlice.actions;

export default newsSlice.reducer;
