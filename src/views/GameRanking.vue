<template>
    <main>
        <div class="ranking">
            <router-link to="Game">
                <p class="back"> ← </p>
            </router-link>
            <h1 id="title">Ranking</h1>
            <div v-if="!data.length" class="no-data">
                <p>데이터가 없습니다</p>
            </div>
            <div v-else class="rank_list">
                <div v-for="(items, idx) in allData" :key='idx'>
                    <p id="dif">{{ Object.keys(items)[0] }}</p>
                    <ol>
                        <li v-for="(item, k) in items[Object.keys(items)[0]]" :key='k'> {{ item.name }}  {{
                formatTime(item.time) }} </li>
                    </ol>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'GameRanking',
    data() {
        return {
            allData: null,
        }
    },
    computed: {
        ...mapState('sudokuRank', ['data']),

    },
    created() {
        this.getData()

    },
    methods: {
        ...mapMutations('sudokuRank', ['getData']),
        padTime(time) {
            return (time < 10 ? '0' : '') + time;
        },
        formatTime(timeInSeconds) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            return `${this.padTime(minutes)}:${this.padTime(seconds)}`;
        },

        filteredItems(items) {
            return items.slice(0, 5);
        },
        rank() {
            const cate = [{ 'easy': [] }, { 'normal': [] }, { 'hard': [] }, { 'extream': [] }]
            const dataArray = Object.values(this.data); // 객체를 배열로 변환
            dataArray.forEach((obj1) => {
                switch (obj1.difficult) {
                    case 'easy': cate[0].easy.push(obj1); break;
                    case 'normal': cate[1].normal.push(obj1); break;
                    case 'hard': cate[2].hard.push(obj1); break;
                    case 'extream': cate[3].extream.push(obj1); break;
                }
            });
            cate.forEach(key => {
                key[Object.keys(key)].sort((a, b) => a.time - b.time);
                key[Object.keys(key)] = key[Object.keys(key)].slice(0, 5);
            });
            this.allData = cate
        }

    },
    watch: {
        data() { this.rank() }
    }
}
</script>
<style lang="scss">
@media screen and (min-width: 920px) {

    .ranking {
        position: relative;

        .back {
            font-size: 40px;
            position: absolute;
            margin: 0;
            top: 10px;
            left: 20px;
        }

        #title {
            font-size: 30px;
            text-align: center;
            padding-top: 20px;
        }

        .no-data {
            margin-top: 50px;
            text-align: center;
            font-size: 20px;
        }

        .rank_list {
            margin: 0 auto;
            width: 80%;
            padding: 20px;
            height: 400px;
            display: flex;
            justify-content: space-between;
            background-color: #cbcbcb;
            border-radius: 20px;

            div {
                
                #dif {
                    font-family: "Luckiest Guy";
                    text-align: center;
                    font-size: 30px;
                }

                .rank_list>#dif:nth-of-type(1) {
                    color: #2DE000;
                }

                div>#dif:nth-of-type(2) {
                    color: #000000;
                }

                div>#dif:nth-of-type(3) {
                    color: #4F95FF;
                }

                div>#dif:nth-of-type(4) {
                    color: #FF0000;
                }



                ol {
                    padding: 0;

                    li {
                        margin: 20px;
                        font-size: 15px;
                        font-weight: bold;
                        margin-bottom: 40px;
                    }
                }

            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 920px) {}
</style>