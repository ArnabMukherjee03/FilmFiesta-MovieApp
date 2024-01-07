import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchDataFromApi } from '../utils/fetchData';

const initialState = {
    status: false,
    loader: false,
    searchLoader: false,
    banner:[],
    movie: [],
    trailer:[],
    search:[],
    upcomeing:[]
}

export const getTrailer = createAsyncThunk(
    "movies/trailer",
    async (url, {rejectWithValue}) => {
      try {
        const response = await fetchDataFromApi(url);
        return response;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error);
      }
    }
);

export const getMovies = createAsyncThunk(
    "movies",
    async (url, {rejectWithValue}) => {
      try {
        const response = await fetchDataFromApi(url);
        return response;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error);
      }
    }
);

export const upcomeingMovies = createAsyncThunk(
  "movies/upcoming",
  async (url, {rejectWithValue}) => {
    try {
      const response = await fetchDataFromApi(url);
      return response;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error);
    }
  }
);

export const searchData = createAsyncThunk(
    "search/movie",
    async ({url,args}, {rejectWithValue}) => {
      try {
        const response = await fetchDataFromApi(url,args);
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const fetchData = createAsyncThunk(
    "movie/fetchData",
    async (url, {rejectWithValue}) => {
      try {
        const response = await fetchDataFromApi(url);
        return response;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error);
      }
    }
  );


const movieSlice = createSlice({
  name: "movies&videos",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(getMovies.pending,(state)=>{
        state.status = true;
    })
    builder.addCase(getMovies.fulfilled,(state,action)=>{
        state.status = false;
        state.movie = action.payload;
    })
    builder.addCase(getMovies.rejected,(state,action)=>{
        state.status = false;
        console.log(action.payload);
    })
    builder.addCase(getTrailer.pending,(state)=>{
        state.status = true;
    })
    builder.addCase(getTrailer.fulfilled,(state,action)=>{
        state.status = false;
        state.trailer = action.payload;
    })
    builder.addCase(getTrailer.rejected,(state,action)=>{
        state.status = false;
        console.log(action.payload);
    })
    builder.addCase(searchData.pending,(state)=>{
      state.searchLoader = true;
  })
  builder.addCase(searchData.fulfilled,(state,action)=>{
      state.searchLoader = false;
      state.search=action.payload;
      
  })
  builder.addCase(searchData.rejected,(state,action)=>{
      state.searchLoader = false;
      state.error(action.payload);
  })
    builder.addCase(fetchData.pending,(state)=>{
        state.loader = true;
    })
    builder.addCase(fetchData.fulfilled,(state,action)=>{
        state.loader = false;
        state.banner = action.payload;
    })
    builder.addCase(fetchData.rejected,(state,action)=>{
        state.loader = false;
        console.log(action.payload);
    })
    builder.addCase(upcomeingMovies.pending,(state)=>{
      state.loader = true;
  })
  builder.addCase(upcomeingMovies.fulfilled,(state,action)=>{
      state.loader = false;
      state.upcomeing = action.payload;
  })
  builder.addCase(upcomeingMovies.rejected,(state,action)=>{
      state.loader = false;
      console.log(action.payload);
  })
  }
});


export const allMovies = (state)=> state.movies.movie;
export const selectLoading = (state) => state.movies.status;
export const selectTrailer = (state) => state.movies.trailer;
export const searchResult = (state)=> state.movies.search;
export const searchStatus = (state) => state.movies.searchLoader;
export const selectData = (state)=> state.movies.banner;
export const selectLoader = (state)=> state.movies.loader;
export const selectupcoming = (state)=> state.movies.upcomeing;
export default movieSlice.reducer;