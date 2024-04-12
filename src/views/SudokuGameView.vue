<template>
  <main>
    <DiffiultyText />
    <ExplanationText />
    <div class="game active3">
      <div class="header">
        <div class="sudoku_title">
          <p>S</p>
          <p>U</p>
          <p>D</p>
          <p>O</p>
          <p>K</p>
          <p>U</p>
        </div>
        <div class="sudoku_select">
          <select name="diffiulty" id="diffiulty">
            <option value="easy">EASY</option>
            <option value="normal">NORMAL</option>
            <option value="hard">HARD</option>
            <option value="extream">EXTREAM</option>
          </select>
          <p id="EX">?</p>
        </div>
      </div>
      <div class="game_main">
        <table class="block_full">
          <!-- <tr v-for="(row, rowIndex) in board" :key="rowIndex" class="block">
            <td v-for="(cell, colIndex) in row" :key="colIndex">
              <table>
                <tr v-for="(value, cellIndex) in cell" :key="cellIndex">
                  <td v-on:click="putNum(rowIndex, colIndex)">
                    {{ value === 0 ? '' : value }}
                  </td>
                </tr>
              </table>
            </td>
          </tr> -->
        </table>
        <table class="keyboard">
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td class="eraser">
              <img src="../../public/img/eraser.png" alt="">
              <p>Eraser</p>
            </td >
            <td class="Reset">
              <img src="../../public/img/reset.png" alt="">
              <p>Reset</p>
            </td>
            <td class="Hint">
              <img src="../../public/img/hint.png" alt="">
              <p>Hint</p>
            </td>
          </tr>
        </table>
      </div>
      <div class="timer">
        <label for="Timer"><img src="../../public/img/timer.png" alt=""></label>
        <p>00:10:25</p>
      </div>
    </div>
  </main>
</template>
<script>
import DiffiultyText from "@/components/DiffiultyText.vue";
import ExplanationText from "@/components/ExplanationText.vue";



export default {
  name: 'sudokuGameView',
  components: {
    DiffiultyText,
    ExplanationText

  },
  data() {
    return {
      board: [],
      num: []
    };
  },
  methods: {
    //9x9 빈배열 만들기
    generateIntermediateSudoku() {
      const board = [];
      for (let i = 0; i < 9; i++) {
        board[i] = [];
        for (let j = 0; j < 9; j++) {
          board[i][j] = 0; // 빈 칸으로 초기화
        }
      }
      this.fill3x3Region(board, 0, 0);
      this.fill3x3Region(board, 3, 3);
      this.fill3x3Region(board, 6, 6);
      this.solveSudoku(board);
      this.removeNumbers(board, 40);
      this.displaySudoku(board)




      this.board = board;
      
    },
    //빈 배열에 섞은 숫자 일부분 채우기 (0,0),(3,3),(6,6)기준 각각 9칸씩
    fill3x3Region(board, startRow, startCol) {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.shuffle(nums);

      let numIndex = 0;
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          board[i][j] = nums[numIndex++];
        }
      }
    },

    //숫자섞기
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    //보드에 0값 없애기 작업
    solveSudoku(board) {
      const emptyCell = this.findEmptyCell(board);
      if (!emptyCell) {
        console.log([...board[1]], '----정답----')
        return true; // 퍼즐이 모두 완성되었음을 의미합니다.
      }

      const [row, col] = emptyCell;

      for (let num = 1; num <= 9; num++) {
        if (this.isValidMove(board, row, col, num)) {
          board[row][col] = num;
          if (this.solveSudoku(board)) {
            return true;
          }

          board[row][col] = 0; // Backtrack
        }
      }

      return false;
    },
    //가로,세로,3x3 중복검사
    isValidMove(board, row, col, num) {
      // 행 검사
      if (board[row].includes(num)) {
        return false;
      }

      // 열 검사
      for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
          return false;
        }
      }

      // 3x3 영역 검사
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          if (board[i][j] === num) {
            return false;
          }
        }
      }

      return true;
    },
    //보드에 0값 위치 유무
    findEmptyCell(board) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (board[i][j] === 0) {
            return [i, j];
          }
        }
      }
      return null;
    },
    //보드 숫자 지우기
    removeNumbers(board, count) {
      while (count > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
          board[row][col] = 0;
          count--;
        }
      }
    },
    displaySudoku(board) {
      const sudokuElement = document.querySelector('.block_full');
      this.test = board;

      // 보드를 초기화
      sudokuElement.innerHTML = '';

      // 9개의 블록 (block 클래스)을 만듦
      let tag = '';
      for (let i = 0; i < 9; i++) {

        if (i % 3 == 0) { tag += '<tr class=block>' }
        tag += '<td><table>'
        for (let j = 0; j < 9; j++) {
          if (j % 3 == 0) { tag += '<tr>'; }
          tag += `<td data-i="${i}" data-j="${j}">`
          tag += board[i][j] === 0 ? '' : board[i][j];
          tag += '</td>'
        }
        tag += '</table></td>'

      }
      const dom = document.querySelector('.block_full');
      dom.innerHTML = tag;

      const block = document.createElement('tr');
      block.className = 'block';


    },
  },
  mounted() {
    this.generateIntermediateSudoku(); // 페이지가 로드될 때 스도쿠 보드 생성
    console.log(this.board[3][3], '부분정답뽑기')
    console.log(this.board, '전체정답뽑기')
    const elTd = document.querySelectorAll('.block td td');
    const elKey = document.querySelectorAll('.keyboard td');
    
    let num = 0;
    elTd.forEach((td,idx) => {
      if (td.innerHTML === '')
        td.onclick = () => {
          
          elTd[num].classList.remove('active')
          elTd[idx].classList.add('active');
          num = idx;
          elKey.forEach((td2, idx2)=>{
            td2.onclick =()=>{
              if(idx2 < 9){
                td.innerHTML = idx2+1
              }else if(idx2 == 9){
                td.innerHTML = ''
              }
              
            }
          })
      }
    })

  }
}
</script>
<!-- scoped 스크립트적용 x -->
<style lang="scss">
.game {
  display: none;

  &.active3 {
    display: block;
    padding: 50px;


    .header {
      display: flex;
      justify-content: space-between;

      .sudoku_title {
        display: flex;
        margin-bottom: 20px;

        p {
          font-size: 30px;
          font-family: "Luckiest Guy";
          margin: 0;
          margin-left: 20px;
        }

        p:nth-of-type(1) {
          color: red;
          margin: 0;
        }

        p:nth-of-type(2) {
          color: orange;
        }

        p:nth-of-type(3) {
          color: yellow;
        }

        p:nth-of-type(4) {
          color: green;
        }

        p:nth-of-type(5) {
          color: blue;
        }

        p:nth-of-type(6) {
          color: #4B0082;
        }
      }

      .sudoku_select {
        width: 20%;
        display: flex;
        justify-content: space-between;

        #diffiulty {
          display: flex;
          margin: 0;
          width: 130px;
          height: 25px;
        }

        #EX {
          margin: 0;
          margin-left: 20px;
          width: 26px;
          height: 26px;
          text-align: center;
          border-radius: 50px;
          background-color: black;
          color: white;
          font-size: 20px;
          font-weight: 800;
        }
      }
    }

    .game_main {
      display: flex;
      justify-content: space-between;

      table {
        border-collapse: collapse;
      }

      .block_full {
        width: 423px;
        border: 1px solid black;

        .block {

          >td {
            width: 33.3333333333%;
            border: 1px solid black;
            box-sizing: border-box;
            padding: 0;
            text-align: center;
            font-family: "Luckiest Guy";
            font-size: 30px;
          }

          table {
            width: 100%
          }

          table td {
            width: 33.333333333%;
            height: 45px;
            border: 0.5px solid black;
            margin: 0;
            box-sizing: border-box;
            &.active{
              background-color: rgb(203, 203, 251);
            }
          }
        }


      }

      .keyboard {
        border: 1px solid black;
        width: 300px;

        tr {

          td {
            width: 33.333333333%;
            height: 99px;
            border: 3px solid black;
            margin: 0;
            box-sizing: border-box;
            font-size: 40px;
            font-family: "Luckiest Guy";
            text-align: center;

            img {
              width: 46px;
            }

            p {
              font-family: sans-serif;
              font-size: 15px;
              font-weight: bold;
              margin: 0;
            }


          }
          td:hover{
            cursor: pointer;
            background-color: #abaaaa;
          }
        }

        tr:nth-of-type(1) {
          background-color: #D9D9D9;
        }

        tr:nth-of-type(2) {
          background-color: #D9D9D9;
        }

        tr:nth-of-type(3) {
          background-color: #D9D9D9;
        }




      }
    }

    .timer {
      display: flex;

      label {
        margin: auto 0;
      }

      p {
        font-weight: bold;
        font: 16px;
      }
    }

  }

}
</style>