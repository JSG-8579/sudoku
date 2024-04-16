<template>
    <div class="diffi">
        <div class="sudoku_title">
            <p>S</p>
            <p>U</p>
            <p>D</p>
            <p>O</p>
            <p>K</p>
            <p>U</p>
        </div>
        <div class="buttons">
            <button value="easy" @click="setDifficulty('easy')">EASY</button>
            <button value="normal" @click="setDifficulty('normal')">NORMAL</button>
            <button value="hard" @click="setDifficulty('hard')">HARD</button>
            <button value="extream" @click="setDifficulty('extream')">EXTREAM</button>
        </div>
        <div class="text_box">
            <ol>
                <li>각각 9칸으로 이뤄진 가로줄과 세로줄에 1~9 숫자를 겹치지 않게 적어 넣어야 합니다. 이때 가로,세로 3칸씩 총 9칸으로 이뤄진 작은 사각형 안에도 1~9의 숫자가 겹치지 않게
                    들어가야 합니다. </li>
                <li>숫자판을 클릭한 후 넣고자 하는 칸을 클릭하면 숫자가 입력되고 입력된 지우개 그림을 클릭 후 기입한 숫자칸을 클릭하면 지워집니다. </li>
                <li>힌트 사용법은 숫자가 채워지지 않은 빈칸의 정답을 알려줍니다. 단 3번만 사용 가능합니다. </li>
                <li>난이도는 EASY, NORMAL, HARD, EXTREAM 4개가 있고, 난이도에 따라 랜덤한 스도쿠가 등장합니다. </li>
            </ol>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';


export default {
    data() {
        return {
            // difficult: 'dsadsa'
        };
    },
    methods: {
        ...mapMutations(['gameType']),
        setDifficulty(value) {
            this.gameType(value),
                this.$emit('test')
        }
    },
    mounted() {

        // const elBtn = document.querySelectorAll('.buttons button'),

        // elBtn.forEach((a, idx)=>{

        // })       
    }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 920px) {
    .diffi {
        position: absolute;
        display: block;
        width: 100%;

        .sudoku_title {
            display: none;
            
        }

        .buttons {
            width: 80%;
            display: flex;
            margin: 30px auto;
            justify-content: space-around;

            button {
                width: 160px;
                height: 66px;
                background-color: black;
                border: 0;
                border-radius: 50px;
                font-size: 26px;
                font-family: "Luckiest Guy";
            }

            button:hover {
                cursor: pointer;
                background-color: #ffffff;
                border: 2px solid black;
            }

            button:nth-of-type(1) {
                color: #2DE000;
            }

            button:nth-of-type(2) {
                color: #ffffff;
            }

            button:nth-of-type(2):hover {
                cursor: pointer;
                color: #000000;
                border: 2px solid black;
            }

            button:nth-of-type(3) {
                color: #4F95FF;
            }

            button:nth-of-type(4) {
                color: #FF0000;
            }
        }

        .text_box {
            width: 80%;
            display: flex;
            margin: 0 auto;
            background-color: #D9D9D9;
            border-radius: 20px;

            ol {
                padding: 40px;
                margin: 0;

                li {
                    font-size: 18px;
                    margin-bottom: 40px;
                    font-weight: 800;
                }

                li:nth-of-type(4) {
                    margin: 0;
                }
            }
        }

        &.active2 {
            display: none;
        }
    }
}
@media screen and (min-width: 768px) and (max-width: 920px) {
    .diffi {
        position: absolute;
        display: block;
        width: 100%;
        margin: 50px auto;
        .sudoku_title {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;

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

        .buttons {
            width: 80%;
            display: flex;
            margin: 0 auto;
            justify-content: space-between;
            flex-wrap: wrap;

            button {
                width: 200px;
                height: 50px;
                background-color: black;
                border: 0;
                border-radius: 50px;
                font-size: 20px;
                font-family: "Luckiest Guy";
                margin-bottom: 30px;
            }

            button:hover {
                cursor: pointer;
                background-color: #ffffff;
                border: 2px solid black;
            }

            button:nth-of-type(1) {
                color: #2DE000;
            }

            button:nth-of-type(2) {
                color: #ffffff;
            }

            button:nth-of-type(2):hover {
                cursor: pointer;
                color: #000000;
                border: 2px solid black;
            }

            button:nth-of-type(3) {
                color: #4F95FF;
            }

            button:nth-of-type(4) {
                color: #FF0000;
            }
        }

        .text_box {
            width: 80%;
            display: flex;
            margin: 0 auto;
            background-color: #D9D9D9;
            border-radius: 20px;

            ol {
                padding: 40px;
                margin: 0;

                li {
                    font-size: 15px;
                    margin-bottom: 40px;
                    font-weight: 800;
                }

                li:nth-of-type(4) {
                    margin: 0;
                }
            }
        }

        &.active2 {
            display: none;
        }
    }
}
</style>