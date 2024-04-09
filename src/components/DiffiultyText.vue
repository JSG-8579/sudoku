<template>
    <div class="diffi active2">
        <div class="buttons">
            <button value="easy">EASY</button>
            <button value="normal">NORMAL</button>
            <button value="hard">HARD</button>
            <button value="extream">EXTREAM</button>
        </div>
        <div class="text_box">
            <ol>
                <li>각각 9칸으로 이뤄진 가로줄과 세로줄에 1~9 숫자를 겹치지 않게 적어 넣어야 합니다. 
                    이때 가로,세로 3칸씩 총 9칸으로 이뤄진 작은 사각형 안에도 1~9의 숫자가 겹치지 않게 들어가야 합니다.
                </li>
                <li>숫자판을 클릭한 후 넣고자 하는 칸을 클릭하면 숫자가 입력되고 입력된 지우개 그림을 클릭 후 기입한 숫자칸을 클릭하면 지워집니다.
                </li>
                <li>힌트 사용법은 숫자가 채워지지 않은 빈칸의 정답을 알려줍니다. 단 3번만 사용 가능합니다.
                </li>
                <li>난이도는 EASY, NORMAL, HARD, EXTREAM 4개가 있고, 난이도에 따라 랜덤한 스도쿠가 등장합니다.
                </li>
            </ol>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .diffi{
        position: absolute;
        display: block;
        width: 100%;
        
        .buttons{
            width: 80%;
            display: flex;
            margin: 30px auto;
            justify-content: space-around;
            button{
                width: 160px;
                height: 66px;
                background-color: black;
                border: 0;
                border-radius: 50px;
                font-size: 26px;
                font-family: "Luckiest Guy";
            }
            button:nth-of-type(1){
                color: #2DE000;
            }
            button:nth-of-type(2){
                color: #ffffff;
            }
            button:nth-of-type(3){
                color: #4F95FF;
            }
            button:nth-of-type(4){
                color: #FF0000;
            }
        }
        .text_box{
            width: 80%;
            display: flex;
            margin: 0 auto;
            background-color: #D9D9D9;
            border-radius: 20px;
            ol{
                padding: 40px;
                margin: 0;
                li{
                  font-size: 18px;
                  margin-bottom: 40px;
                  font-weight: 800;
                }
                li:nth-of-type(4){
                    margin: 0;
                }
              }
        }
        
        &.active2{
            display: none;
        }
    }
</style>