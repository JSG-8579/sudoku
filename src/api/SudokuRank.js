

//서버에 요청
import axios from 'axios';

export const fetch= {

    get:async ()=>{
        const res = await axios(process.env.VUE_APP_VERCEL)
        
        return res.data
    },

    post:async (value)=>{
        const res = await axios.post(process.env.VUE_APP_VERCEL,value)
        
        return res.data
    },

  }