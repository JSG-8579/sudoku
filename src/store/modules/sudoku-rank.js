import { fetch } from '@/api/SudokuRank'
//상태관리 => api

export const sudokuRank = {
    namespaced:true,

    state: {
        difficult:'easy',
        data:''
    },
    getters: {
    },
    mutations: {
        async getData(state){
            const res = await fetch.get();
            state.data = res;
        },

        async postData(state, value){
          console.log(value, '추가값')
            await fetch.post(value);
            const res = await fetch.get();
            state.data = res; 
        },
        async gameType(state, value){
          console.log(state,'난이독밧')
          state.difficult=value
        }

    },
    actions: {
    }
}