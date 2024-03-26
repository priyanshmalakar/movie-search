import React, { useEffect } from 'react'
import { fetchData } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConf, getGenres } from './store/homeSlice'
import { Footer, Header } from './components/component'
import { Home, Details, Explore, PageNotFound, SearchResult } from './Pages/pages'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])
  const fetchApiConfig = () => {
    fetchData('/configuration').then((res) => {
      const imgUrl={
        backdrop: res.images.secure_base_url+"original",
        poster: res.images.secure_base_url+"original",
        profile: res.images.secure_base_url+"original",
      }
      dispatch(getApiConf(imgUrl))
    })
  }

  // 

  const genresCall= async ()=>{
const promise=[]
const endpoints=['tv','movie']
let allGenres={}
 endpoints.forEach((url)=>{
  promise.push(fetchData(`/genre/${url}/list`))

 })
 const data= await Promise.all(promise)

 data.map(({genres})=>{
genres.map((item)=>{
allGenres[item.id]=item;
})
 })
 dispatch(getGenres(allGenres))
  }

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/:mediaType/:id' element={<Details/>}/> 
     <Route path='/search/:query' element={<SearchResult/>}/> 
     <Route path='/explore/:mediaType' element={<Explore/>}/> 
     <Route path='*' element={<PageNotFound/>}/> 
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App