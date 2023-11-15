<template>
  <button class="btn" @click="sub">Сгенерировать счет</button>
  <div class="doc">
    <div class="ls">
      Л/c: <div>{{getScore}}</div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  computed: mapGetters(['getScore']),
  methods:{
    ...mapMutations(['updateScore']),
    sub(){
      this.updateScore()
    },
  },
  mounted() {
    this.sub()
  }
}
</script>

<style lang="scss" scoped>
.doc{
  width: 700px;
  height: 700px ;
  background: no-repeat url("@/assets/doc.png") center;
  background-size: 100% 100%;
}
.ls{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top:103px;
  left: 568px;
  width: 102px;
  height: 17px;
  background-color: #fff;
  border: 1px solid black;
  div{
    margin-left: 5px;
    margin-top: 2px;
    font-size: 12px;
  }
}
</style>