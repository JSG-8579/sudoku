<template>
    <main>
        <div class="ranking">
            <router-link to="Game">
                <p class="back"> ← </p>
            </router-link>
            <h1 id="title">Ranking</h1>
            <div class="rank_list">
                <div v-if="allData==null">
                    <p>데이터가 없습니다</p>
                </div>
                <div v-else v-for="(items, idx) in allData" :key='idx' >
                    <p id="dif">{{ Object.keys(items)[0] }}</p>
                    <ol>
                        <li v-for="(item, k) in items[Object.keys(items)[0]]" :key='k'>{{ item.name }} {{ item.time }}
                        </li>
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
            allData: null
        }
    },
    computed: {
        ...mapState('sudokuRank', ['data']),
    },
    created() {
        this.getData()
        console.log('1111-----------', this.allData)
        
    },
    methods: {
        ...mapMutations('sudokuRank', ['getData']),
        filteredItems(items) {
            return items.slice(0, 5);
        },
        rank(){
            console.log(this.data,'==========')
            const cate = [{ 'easy': [] }, { 'normal': [] }, { 'hard': [] }, { 'extream': [] }]
            const dataArray = Object.values(this.data); // 객체를 배열로 변환
            console.log(dataArray, '변환')
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
            console.log(this.allData, 'dsadsa')
        }

    },
    watch:{
        data(){ this.rank() }
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

        .rank_list {
            display: flex;
            justify-content: space-around;


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
                padding: 15px;
                background-color: #D9D9D9;
                border-radius: 20px;

                li {
                    margin: 20px;
                    font-size: 20px;
                }
            }

        }
    }
}

@media screen and (min-width: 768px) and (max-width: 920px) {}
</style>