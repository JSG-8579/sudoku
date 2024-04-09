<template>
    <main>
        <div class="home">
            <img class="main_img" src="../../public/img/sudoku_img.png" alt="">
            <div class="main_text">
                <div class="sudoku_text">
                    <p>S</p>
                    <p>U</p>
                    <p>D</p>
                    <p>O</p>
                    <p>K</p>
                    <p>U</p>
                </div>
                <router-link to="Game" class="start_link">
                    <p id="start">Start</p>
                </router-link>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'HomeView'
}
</script>
<style lang="scss" scoped>
.home {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .main_text {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .sudoku_text {
            display: flex;

            p {
                font-size: 90px;
                font-family: "Luckiest Guy";
                margin: 0;
                margin-left: 30px;
            }

            p:nth-of-type(1) {
                color: red;
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

        .start_link {
            text-align: center;
            text-decoration-line: none;
            line-height: 90px;

            #start {

                margin: 0 auto;
                width: 250px;
                height: 90px;
                font-size: 60px;
                background-color: black;
                border-radius: 50px;
                color: white;
                font-family: "Luckiest Guy";
                border: 1px solid transparent;
            }

            #start:hover {
                background-color: white;
                color: black;
                border: 1px solid black;
            }

        }
    }

}
</style>