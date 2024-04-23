

//서버에 요청
import axios from 'axios';

export const fetch= {

    get:async ()=>{
        const res = await axios('https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/sudoku')
        
        return res.data
    },

    post:async (value)=>{
        const res = await axios.post('https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/sudoku',value)
        
        return res.data
    },

  }