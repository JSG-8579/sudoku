import { createStore } from 'vuex'
import { sudokuRank } from "./modules/sudoku-rank";

export default createStore({
  modules: {
    sudokuRank
  }
})