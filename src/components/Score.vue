<template>
  <div>
    <div class="nav">
      <div style="display: flex;align-items: center">
        <img src="@/assets/svg/sberbank-svgrepo-com.svg" style="margin-right: 10px" />
        <div>Оплата по квитанции</div>
      </div>
      <router-link :to="{name:'main'}" style="text-decoration: none; color:#000"><div class="exit">
        <img src="@/assets/svg/exit-svgrepo-com.svg" />
        Завершить обсуживаение
      </div>
      </router-link>
    </div>
    <div class="title">Лицевой счет</div>
    <div class="input">
      <input placeholder="Введите номер лицевого счета" readonly type="text" v-model="getStr" >
    </div>

    <div class="result" v-if="result">
      Такого счета не существует
    </div>

    <div class="nav_down">
      <router-link :to="{name: 'menu'}" style="text-decoration: none;color: #000" @click="cancelStr"><div class="item">Назад</div></router-link>
      <div class="item" @click="scan">Отсканировать документ</div>
      <div class="item" @click="equals">Далее</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import router from "@/router";

export default {
  data(){
    return{
      result: false
    }
  },
  computed: mapGetters(['getStr', 'getScore']),
  methods:{
    ...mapMutations(['updateSms', 'updateScan', 'updateStr']),
    equals(){
      if(this.getStr === this.getScore){
        this.result = false
        router.push({name: 'telephone'})
        this.updateSms()
      }
      else this.result = true
    },
    scan(){
      this.updateScan('scan')
      setTimeout(()=>{
        this.updateScan('')
        this.updateStr(this.getScore)
        router.push({name: 'telephone'})
        this.updateSms()
      }, 3 * 1000)

    }
  }
}
</script>

<style lang="scss" scoped>
.result{
  position: absolute;
  top: 220px;
  left: 120px;
}
.nav{
  display: flex;
  justify-content: space-between;
  padding: 8px;
  img{
    width: 50px;
  }
}
.exit{
  width: 150px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: solid #ff0000 1px;
}
.nav_down{
  margin-top: 90px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  .item{
    border: #49DB95 1px solid;
    border-radius: 10px;
    padding: 10px;
  }
}
.title{
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 25px;
}
.input{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  input{
    padding: 10px;
    width: 90%;
    height: 50px;
  }
}


</style>