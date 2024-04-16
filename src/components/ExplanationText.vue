<template>
  <div :class="`explan ${act}`">
    <p class="close" @click="exOff">X</p>
    <ol>
      <li>각각 9칸으로 이뤄진 가로줄과 세로줄에 1~9 숫자를 겹치지 않게 적어 넣어야 합니다. 이때 가로,세로 3칸씩 총 9칸으로 이뤄진 작은 사각형 안에도 1~9의 숫자가 겹치지 않게 들어가야 합니다.
      </li>
      <li>숫자판을 클릭한 후 넣고자 하는 칸을 클릭하면 숫자가 입력되고 입력된 지우개 그림을 클릭 후 기입한 숫자칸을 클릭하면 지워집니다. </li>
      <li>힌트 사용법은 숫자가 채워지지 않은 빈칸의 정답을 알려줍니다. 단 3번만 사용 가능합니다. </li>
      <li>난이도는 EASY, NORMAL, HARD, EXTREAM 4개가 있고, 난이도에 따라 랜덤한 스도쿠가 등장합니다. </li>
    </ol>
  </div>
</template>
<script>
export default {
  props: ['act'],
  methods: {
    exOff() {

      this.$emit('test2')
    },
  }

}
</script>
<style scoped lang="scss">
@media screen and (min-width: 920px) {
  .explan {
    display: none;

    &.active {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      width: 900px;
      height: 600px;

      .close {
        text-align: end;
        font-size: 50px;
        margin: 0 30px;

        color: white;
        font-weight: thin;
      }

      .close:hover {
        cursor: pointer;
      }

      ol {
        padding: 70px;
        margin: 0;

        li {
          color: white;
          font-size: 20px;
          margin-bottom: 40px;
          font-weight: 800;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 920px) {
  .explan {
    display: none;

    &.active {
      display: block;
      position: absolute;
      top: 5%;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      width: 500px;
      height: 700px;

      .close {
        text-align: end;
        font-size: 50px;
        margin: 0 30px;

        color: white;
        font-weight: thin;
      }

      .close:hover {
        cursor: pointer;
      }

      ol {
        padding: 70px;
        margin: 0;

        li {
          color: white;
          font-size: 17px;
          margin-bottom: 40px;
          font-weight: 800;
        }
      }
    }
  }
}
</style>