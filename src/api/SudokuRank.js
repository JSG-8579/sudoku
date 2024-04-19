

//서버에 요청
import axios from 'axios';

export const fetch= {

    get:async ()=>{
        const res = await axios('http://localhost:3000/sudoku')
        console.log(res.data)
        return res.data
    },

    post:async (value)=>{
        const res = await axios.post('http://localhost:3000/sudoku',value)
        console.log(value,'ddd')
        return res.data
    },

  }