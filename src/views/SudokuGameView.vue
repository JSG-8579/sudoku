<template>
  <main>
    <DiffiultyText />
      <ExplanationText/>
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
          <tr class="block">
            <td>
              <table>
                <tr>
                  <td>5</td>
                  <td>3</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>9</td>
                  <td>8</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td></td>
                  <td>7</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>6</td>
                  <td></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr class="block">
            <td>
              <table>
                <tr>
                  <td>8</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td></td>
                  <td>6</td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td></td>
                  <td>3</td>
                </tr>
                <tr>
                  <td></td>
                  <td>2</td>
                  <td></td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td></td>
                  <td></td>
                  <td>3</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>6</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr class="block">
            <td>
              <table>
                <tr>
                  <td></td>
                  <td>6</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>1</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td></td>
                  <td>8</td>
                  <td></td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>2</td>
                  <td>8</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>5</td>
                </tr>
                <tr>
                  <td></td>
                  <td>7</td>
                  <td>9</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table class="keybord">
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
            <td>
              <img src="../../public/img/eraser.png" alt="">
              <p>Eraser</p>
            </td>
            <td>
              <img src="../../public/img/reset.png" alt="">
              <p>Reset</p>
            </td>
            <td>
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
import ExplanationText from "@/components/ExplanationText.vue"

export default {
  name: 'sudokuGameView',
  components: {
    DiffiultyText,
    ExplanationText
    
  }
}
</script>
<style lang="scss" scoped>
.game {
  display: none;
  &.active3{
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
        }
      }
    }

    .keybord {
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
  .timer{
    display: flex;
    label{
      margin: auto 0;
    }
    p{
      font-weight: bold;
      font: 16px;
    }
  }

  }
  
}
</style>