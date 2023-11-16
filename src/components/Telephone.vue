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
    <div class="container">
      <div>Ваша задолжность</div>
        <div>по счету {{getScore}} состовляет:</div>
      <div style="font-size: 22px; font-weight: bold; margin-bottom: 10px">{{getPrice}} руб.</div>
      <div>Введите ваш номер телефона для погашения задолжности</div>
      <input placeholder="Введите номер телефона" readonly type="text" v-model="getTelStr"/>
    </div>
    <div v-if="red" class="red">Некорректный номер</div>
    <div class="nav_down">
      <router-link :to="{name: 'score'}" style="text-decoration: none;color: #000"><div class="item">Назад</div></router-link>
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
    red: false
    }
  },
computed: mapGetters(['getPrice', "getScore", 'getTelStr', 'getTel']),
  methods:{
  ...mapMutations(['updateSmsCode', 'updateShowCode', 'updateSmsBalance', 'updateBalance']),
    equals(){
    if(this.getTelStr.length < 6){
      this.red = true
    }
    else{
      this.red = false
      if(this.getTelStr === this.getTel) {
        this.updateBalance()
        this.updateSmsBalance()
        this.updateSmsCode()
        this.updateShowCode()
      }
      router.push({name: 'sms'})
    }
    }

  }
}
</script>

<style lang="scss" scoped>
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
.container{
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  div{
    text-align: center;
    margin: 5px;
  }
}
input{
  height: 40px;
}
.nav_down{
  margin-top: 0px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  .item{
    border: #49DB95 1px solid;
    border-radius: 10px;
    padding: 10px;
  }
}
.red{
  position: absolute;
  top :290px;
  left: 140px;
  color: red
}
</style>