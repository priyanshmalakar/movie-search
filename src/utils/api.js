import axios from "axios";
const baseUrl='https://api.themoviedb.org/3'
const token=import.meta.env.VITE_APP_TMBD_API_TOKEN;
const headers={
    Authorization:`bearer ${token}`,
}
export const fetchData= async (url,params)=>{try {

const {data}=await axios.get(baseUrl+url,{
    headers,
    params
})
return data
}catch (error) {
    console.log(error);
    return error;
}
}

    
 