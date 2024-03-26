import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'counter',
  initialState:{
    url:{},
    genre:{}
  },
  reducers: {
    getApiConf:(state,action)=>{
state.url=action.payload
    },
    getGenres:(state,action)=>{
        state.genre=action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { getApiConf,getGenres } = homeSlice.actions

export default homeSlice.reducer