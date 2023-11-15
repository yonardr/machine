<template>
  <div class="container">
    <div class="btns">
      <div class="row">
        <button @click="submit(1)">1</button>
        <button @click="submit(2)">2</button>
        <button @click="submit(3)">3</button>
        <button class="dop" style="background: #a00304" @click="cancelStr">cancel x</button>
      </div>
      <div class="row">
        <button @click="submit(4)">4</button>
        <button @click="submit(5)">5</button>
        <button @click="submit(6)">6</button>
        <button class="dop" style="background: #f1ce00" @click="clearStr">clear |</button>
      </div>
      <div class="row">
        <button @click="submit(7)">7</button>
        <button @click="submit(8)">8</button>
        <button @click="submit(9)">9</button>
        <button class="dop"></button>
      </div>
      <div class="row">
        <button>-</button>
        <button @click="submit(0)">0</button>
        <button>+</button>
        <button class="dop" style="background: #02b856" >enter o</button>
      </div>

    </div>
  </div>

</template>

<script>
import Score from "@/components/Score.vue";
import {mapMutations} from "vuex";
import router from "@/router";

export default {
  components: {Score},
  methods:{
    ...mapMutations(['updateStr', 'clear', 'cancel']),
    submit(num){
      this.updateStr(num)
    },
    clearStr(){
      this.clear()
    },
    cancelStr(){
      if(router.currentRoute.value.path !== '/'){
        router.go(-1)
      }
      this.cancel()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 150px;
  transform-style: preserve-3d;
  perspective: 200px;
  //background: rgba(195,209,212,.7);
}
button{
  font-size: 12px;
  width: 30px;
  height: 15px;
  margin: 1px;
  font-weight: bold;
  &.dop{
    width: 51px;
  }
}

.btns{
  //background: rgba(169,90,145,.8);
  //animation: rotate 5s infinite;
  position: relative;
  transform:  rotateX(25deg);
}
@keyframes rotate {
  50% {
    transform: rotateX(0deg);
  }
}
</style>