<template>
  <main>
    <SudokuGame v-if="difficult" @test="setGame" @test2="explanationOnOff"/>
    <DifficultyText v-else @test="setGame"/>
    <ExplanationText :act="addclass" @test2="explanationOnOff"/>
  </main>
</template>
<script>
import DifficultyText from "@/components/DifficultyText.vue";
import ExplanationText from "@/components/ExplanationText.vue";
import SudokuGame from "@/components/SudokuGame.vue";





export default {
  name: 'sudokuGameView',
 
  components: {
    DifficultyText,
    ExplanationText,
    SudokuGame

  },
  data() {
    return {
      difficult: false,
      active:false,
      addclass:'',
    };
  },
  methods:{
    setGame(){
      this.difficult = !this.difficult
    },
    explanationOnOff(){
      
      this.active = !this.active
      this.addclass = (this.active ? 'active' : '')
      
    }
  }
}
</script>
<!-- scoped 스크립트적용 x -->
<style lang="scss">

</style>