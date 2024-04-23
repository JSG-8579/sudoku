import { fetch } from '@/api/SudokuRank'
//상태관리 => api

export const sudokuRank = {
    namespaced:true,

    state: {
        difficult:'easy',
        data:[]
    },
    getters: {
    },
    mutations: {
        async getData(state){
            const res = await fetch.get();
            state.data = res;
        },

        async postData(state, value){
          
            await fetch.post(value);
            const res = await fetch.get();
            state.data = res; 
        },
        async gameType(state, value){
          
          state.difficult=value
        }

    },
    actions: {
    }
}