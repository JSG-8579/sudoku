<template>
    <div class="game active3">
        <div class="modal_box" v-if="showModal">
            <div class="modal">
                <div class="modal-content">
                    <p>스도쿠를 성공적으로 완료했습니다!</p>
                    <p>난이도: {{ difficult }}</p>
                    <p>클리어 시간: {{ formatTime }}</p>
                    <input type="text" maxlength='4' v-model="playerName" placeholder="이름을 입력하세요...">
                    <div class="buttons">
                        <router-link to="Ranking">
                            <button @click="submitName">등록</button>
                        </router-link>
                        <button @click="closeModal">취소</button>
                    </div>
                </div>
            </div>
        </div>
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
                <div class="m_timer">
                    <label for="Timer"><img src="../../public/img/timer.png" alt=""></label>
                    <p>{{ formatTime }}</p>
                </div>
                <select name="diffiulty" id="diffiulty" v-model="difficult" @change="handleDifficultyChange">
                    <option value="easy">EASY</option>
                    <option value="normal">NORMAL</option>
                    <option value="hard">HARD</option>
                    <option value="extream">EXTREAM</option>
                </select>
                <p id="EX" @click="exOn">?</p>
            </div>
        </div>
        <div class="game_main">
            <table class="block_full">
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
                    </td>
                    <td class="Reset" @click="handleResetClick">
                        <img src="../../public/img/reset.png" alt="">
                        <p>Reset</p>
                    </td>
                    <td class="Hint">
                        <img src="../../public/img/hint.png" alt="">
                        <p>Hint</p>
                    </td>
                </tr>
            </table>
            <table class="m_keyboard">
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td class="eraser" colspan="3">
                        <img src="../../public/img/eraser.png" alt="">
                        <p>Eraser</p>
                    </td>
                    <td class="Reset" @click="handleResetClick" colspan="3">
                        <img src="../../public/img/reset.png" alt="">
                        <p>Reset</p>
                    </td>
                    <td class="Hint" colspan="3">
                        <img src="../../public/img/hint.png" alt="">
                        <p>Hint</p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="timer">
            <div>
                <label for="Timer"><img src="../../public/img/timer.png" alt=""></label>
                <p>{{ formatTime }}</p>
            </div>
            <router-link to="Ranking">
                <p id="rank">RANKING -></p>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            board: [],
            num: [],
            copy: [],
            copy2: [],
            timer: null,
            time: 0,
            isRunning: false,
            // 각 셀의 힌트 카운터 배열 초기화
            hintCounts: 0,
            screenWidth: window.innerWidth,
            elKey: null,
            showModal: false,
            playerName: '',
        };
    },
    computed: {
        ...mapState('sudokuRank', ['difficult']),
        formatTime() {
            const minutes = Math.floor(this.time / 60);
            const seconds = this.time % 60;
            return `${this.padTime(minutes)}:${this.padTime(seconds)}`;
        },


    },
    methods: {
        ...mapMutations('sudokuRank', ['getData', 'postData', 'gameType']),

        openModal(a) {
            this.showModal = true;
            this.time == a
        },
        closeModal() {
            this.showModal = false;
            this.$emit('test')

        },
        submitName() {
            //이걸로 보내기
            
            this.postData({ 'difficult': this.difficult, 'name': this.playerName, 'time': this.time })
            this.closeModal();
            // window.location.reload()

        },

        handleResize() {
            this.screenWidth = window.innerWidth;
            this.handleKeyClick()
        },
        exOn() {
            
            this.$emit('test2')
        },
        device(n) {
            if (n) {
                this.elKey = document.querySelectorAll('.keyboard td');
            } else {
                this.elKey = document.querySelectorAll('.m_keyboard td');
            }
        },
        handleKeyClick() {

            const mq = window.matchMedia('(min-width: 920px)');

            this.device(mq.matches)

            mq.addListener((e) => {
                this.device(e.matches)
                //td 불켜진거 끄기 제발 해라
            })

            const elTd = document.querySelectorAll('.block td');
            let num = 0;
            elTd.forEach((td, idx) => {
                if (td.innerHTML === '')
                    td.onclick = () => {
                        const { i, j } = td.dataset;

                        elTd[num].classList.remove('active')
                        elTd[idx].classList.add('active');
                        num = idx;
                        this.elKey.forEach((td2, idx2) => {
                            td2.onclick = () => {

                                if (idx2 < 9 ) {
                                    this.board[i][j] = idx2 + 1;
                                    td.innerHTML = idx2 + 1
                                    this.copy2 = this.board.map(obj => [...obj]);
                                    this.answer(this.copy, this.copy2)
                                } else if (idx2 == 9) {
                                    td.innerHTML = ''
                                } else if (idx2 == 11 && this.hintCounts < 3) {
                                    td.innerHTML = this.copy[i][j]
                                    this.board[i][j] = this.copy[i][j]
                                    this.hintCounts++
                                    this.copy2 = this.board.map(obj => [...obj]);
                                    alert(`힌트가 ${3 - this.hintCounts}개 남았습니다.`)
                                    this.answer(this.copy, this.copy2)
                                    
                                } else if (idx2 == 11 && this.hintCounts == 3) {
                                    alert('힌트를 다 쓰셨습니다.')
                                }else if(JSON.stringify(this.copy) == JSON.stringify(this.copy2)){
                                    alert('정답을 다 맞추셨습니다.')
                                }

                            }

                        })
                    }
            })
        },
        handleResetClick() {
            this.resetTimer()
            this.generateIntermediateSudoku()
            this.handleKeyClick()
        },
        handleDifficultyChange(e) {
            this.$store.commit('sudokuRank/gameType', e.target.value);
            this.generateIntermediateSudoku()
            this.resetTimer()
            this.handleKeyClick()
        },
        answer(a, b) {
            if (JSON.stringify(a) === JSON.stringify(b)) {
                clearInterval(this.timer);
                // this.pauseTimer()
                this.openModal(this.time);
            }
        },
        startTimer() {
            if (!this.isRunning) {
                this.isRunning = true;
                this.timer = setInterval(() => {
                    this.time++;
                }, 1000);
            }
        },
        pauseTimer() {
            if (this.isRunning) {
                this.isRunning = false;
                
            }
        },
        resetTimer() {
            this.pauseTimer();
            this.time = 0;
        },
        padTime(time) {
            return (time < 10 ? '0' : '') + time;
        },

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
            this.difficultSelect(this.difficult, board);
            this.displaySudoku(board);




            this.board = board;

        },
        //빈 배열에 섞은 숫자 일부분 채우기 (0,0),(3,3),(6,6)기준 각각 9칸씩
        difficultSelect(type, board) {
            
            switch (type) {
                case 'easy':
                    this.removeNumbers(board, 25)
                    break;
                case 'normal':
                    this.removeNumbers(board, 30)
                    break;
                case 'hard':
                    this.removeNumbers(board, 40)
                    break;
                case 'extream':
                    this.removeNumbers(board, 50)
                    break;

                default:
                    break;
            }
        },
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
                this.copy = board.map(obj => [...obj]);

                return true; // 퍼즐이 모두 완성
            }
            const [row, col] = emptyCell;


            for (let num = 1; num <= 9; num++) {
                if (this.isValidMove(board, row, col, num)) {

                    board[row][col] = num;
                    if (this.solveSudoku(board)) {
                        return true;
                    }

                    board[row][col] = 0;
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

                tag += '<tr class=block>';
                for (let j = 0; j < 9; j++) {
                    tag += `<td class="${board[i][j] === 0 ? "zero" : ""}" data-i="${i}" data-j="${j}">`
                    tag += board[i][j] === 0 ? '' : board[i][j];
                    tag += '</td>'
                }
                tag += '</tr>';

            }
            const dom = document.querySelector('.block_full');
            dom.innerHTML = tag;

            const block = document.createElement('tr');
            block.className = 'block';


        },
        chunk(data, size) {
            const arr = [];

            for (let i = 0; i < data.length; i += size) {
                arr.push(data.slice(i, i + size));
            }

            return arr;
        }
    },
    mounted() {

        this.generateIntermediateSudoku(); // 페이지가 로드될 때 스도쿠 보드 생성
        this.startTimer();
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

    },


}
</script>
<style lang="scss">
@media screen and (min-width: 920px) {
    .game {
        display: none;

        &.active3 {
            display: block;
            padding: 50px;

            .modal_box {
                width: 100%;
                height: 100%;
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                top: 0;
                left: 0;

                .modal {
                    position: absolute;
                    background-color: white;
                    border-radius: 20px;
                    border: 2px solid black;
                    top: 30%;
                    left: 30%;


                    .modal-content {

                        display: flex;
                        flex-direction: column;
                        padding: 20px;
                        align-items: center;

                        p {
                            text-align: center;
                            margin: 3px 0;
                            font-weight: bold;
                        }

                        p:nth-of-type(1) {}

                        input {
                            margin-top: 5px;
                            width: 150px;
                            height: 20px;
                            border-radius: 5px;
                            border: 1px solid rgb(184, 184, 184);
                        }

                        .buttons {
                            display: flex;
                            justify-content: space-around;
                            margin-top: 10px;

                            button {
                                width: 70px;
                                background-color: black;
                                border-radius: 10px;
                                color: white;
                                padding: 3px;
                                border: 1px solid transparent;
                            }

                            button:hover {
                                color: black;
                                background-color: white;
                                border: 1px solid black;
                            }

                            button:nth-of-type(1) {
                                margin-right: 10px;
                            }

                            button:nth-of-type(2) {
                                margin-left: 10px;
                            }
                        }

                    }
                }
            }


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
                    width: 25%;
                    display: flex;
                    justify-content: space-between;

                    .m_timer {
                        display: none;

                        label {
                            margin: auto 0;
                        }

                        p {
                            font-weight: bold;
                            font: 16px;
                        }
                    }

                    #diffiulty {
                        display: flex;
                        margin-right: 20px;
                        width: 130px;
                        height: 25px;
                    }

                    #EX {
                        margin: 0 0 0 20px;
                        width: 25px;
                        height: 25px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: black;
                        color: white;
                        font-size: 20px;
                        font-weight: 800;
                        border: 2px solid transparent;
                    }

                    #EX:hover {
                        cursor: pointer;
                        background-color: white;
                        color: black;
                        border: 2px solid black
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
                            width: 11.11111111%;
                            border: 1px solid black;
                            box-sizing: border-box;
                            padding: 0;
                            text-align: center;
                            font-family: "Luckiest Guy";
                            font-size: 30px;

                            &.active {
                                background-color: rgb(203, 203, 251);
                            }
                        }

                        >td:nth-of-type(1) {
                            border-left: 2px solid black;
                        }

                        >td:nth-of-type(3n) {
                            border-right: 2px solid black
                        }

                    }
                }

                .block:nth-of-type(1) {
                    >td {
                        border-top: 2px solid black;
                    }
                }

                .block:nth-of-type(3n) {
                    >td {
                        border-bottom: 2px solid black;
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

                    td:hover {
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

            .m_keyboard {
                display: none;
                background-color: black;

            }
        }

        .timer {
            display: flex;
            justify-content: space-between;

            div {
                display: flex;

                label {
                    margin: auto 0;
                }

                p {
                    font-weight: bold;
                    font: 16px;
                }

            }

            a {
                text-decoration: none;
                color: black;
                #rank {
                    font-family: "Luckiest Guy";
                }
            }


        }

    }
}

@media screen and (min-width: 768px) and (max-width: 920px) {
    .game {
        display: none;

        &.active3 {
            display: block;
            padding: 50px;


            .header {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .sudoku_title {
                    display: flex;

                    justify-content: center;

                    p {
                        font-size: 50px;
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
                    width: 337px;
                    margin: 10px auto;
                    display: flex;
                    justify-content: space-between;

                    .m_timer {
                        display: flex;

                        label {
                            margin: auto 0;
                        }

                        p {
                            font-weight: bold;
                            font: 16px;
                        }
                    }

                    #diffiulty {
                        display: flex;
                        width: 80px;
                        height: 25px;

                        margin: auto 0;
                    }

                    #EX {

                        margin: auto 0;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: black;
                        color: white;
                        font-size: 15px;
                        font-weight: 800;
                        border: 2px solid transparent;
                    }

                    #EX:hover {
                        cursor: pointer;
                        background-color: white;
                        color: black;
                        border: 2px solid black
                    }
                }
            }

            .game_main {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                table {
                    border-collapse: collapse;
                }

                .block_full {
                    width: 337px;
                    border: 1px solid black;
                    margin: 0 auto;

                    .block {

                        >td {
                            width: 11.11111111%;
                            height: 37px;
                            border: 1px solid black;
                            box-sizing: border-box;
                            padding: 0;
                            text-align: center;
                            font-family: "Luckiest Guy";
                            font-size: 25px;

                            &.active {
                                background-color: rgb(203, 203, 251);
                            }
                        }

                        >td:nth-of-type(1) {
                            border-left: 2px solid black;
                        }

                        >td:nth-of-type(3n) {
                            border-right: 2px solid black
                        }

                    }
                }

                .block:nth-of-type(1) {
                    >td {
                        border-top: 2px solid black;
                    }
                }

                .block:nth-of-type(3n) {
                    >td {
                        border-bottom: 2px solid black;
                    }
                }


            }

            .keyboard {
                display: none;
            }

            .m_keyboard {
                border: 1px solid black;
                width: 337px;
                margin: 20px auto;

                tr {

                    td {
                        width: 11.11111111%;
                        height: 30px;
                        border: 2px solid black;
                        margin: 0;
                        box-sizing: border-box;
                        font-size: 25px;
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

                    td:hover {
                        cursor: pointer;
                        background-color: #abaaaa;
                    }
                }

                tr:nth-of-type(1) {
                    background-color: #D9D9D9;
                }

                tr:nth-of-type(2) {
                    background-color: #ffffff;
                }


            }

        }

        .timer {
            display: none;
        }

    }
}
</style>