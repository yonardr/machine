<template>
  <button class="btn" @click="sub">Сгенерировать счет</button>
  <div class="doc">
    <div class="ls">
      Л/c: <div>{{getScore}}</div>
    </div>
    <div class="ls price">{{getPrice}}</div>
    <div class="noscan" :class="getScan">
      <img
          src=
              "https://media.geeksforgeeks.org/wp-content/uploads/20210428125647/barcode1-300x158.png"
          alt="barcode"
      />
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  computed: mapGetters(['getScore', 'getPrice', 'getScan']),
  methods:{
    ...mapMutations(['updateScore', 'updatePrice']),
    sub(){
      this.updateScore()
      this.updatePrice()
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
.price{
  text-align: center;
  width: 38px;
  height: 14px;
  top:349px;
  left: 383px;
}
.noscan{
  display: none;
}
.scan {
  display: block;
  width: 10em;
  text-align: center;
  padding: 6px 2px;
  position: relative;
  left: 310px;
  top: 18px;
  margin: auto;
  border: dashed .25em rgb(90, 85, 85);
  transform: translate(-50%);
}

.scan::after {
  content: '';
  background: rgb(23, 162, 74);
  width: 0.25em;
  height: 3.5em;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  opacity: 7;
  z-index: 2;
  animation: 2s infinite ease-in-out roll;
}

.scan img {
  height: 30px;
  width: 100px;
}

@keyframes roll {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(-50px);
  }
}
</style>