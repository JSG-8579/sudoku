

//서버에 요청
import axios from 'axios';

export const fetch= {

    get:async ()=>{
        const res = await axios('http://localhost:3000/sudoku')
        
        return res.data
    },

    post:async (value)=>{
        const res = await axios.post('http://localhost:3000/sudoku',value)
        
        return res.data
    },

  }