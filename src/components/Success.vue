<template>
  <div>
    <div class="nav">
      <div style="display: flex;align-items: center">
        <img src="@/assets/svg/sberbank-svgrepo-com.svg" style="margin-right: 10px" />
        <div>Подтверждение sms</div>
      </div>
      <router-link :to="{name:'main'}" style="text-decoration: none; color:#000"><div class="exit">
        <img src="@/assets/svg/exit-svgrepo-com.svg" />
        Завершить обсуживаение
      </div>
      </router-link>
    </div>
    <div class="container">
      <div>Введите код из смс</div>
      <input placeholder="Введите код из sms" readonly type="text" v-model="ShowCodeStr" />
      <span v-if="er" style="position: absolute; top: 210px">Код неверный</span>
      <span v-if="price" style="position: absolute; top: 210px">Недостаточно средств</span>
    </div>

    <div class="nav_down">
      <router-link :to="{name: 'telephone'}" style="text-decoration: none;color: #000" @click="cancelStr"><div class="item">Назад</div></router-link>
      <div class="item" @click="equals">Оплатить</div>
    </div>
    <div class="img" v-if="success">
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  data(){
    return{
      er: false,
      price: false,
      success: true
    }
  },
  computed:mapGetters(['ShowCode', 'ShowCodeStr', 'ShowBalance', 'getPrice']),
  methods:{
    ...mapMutations(['clearCodeStr']),
    equals(){
      if(this.ShowCode === this.ShowCodeStr){
        if(Number(this.getPrice) > Number(this.ShowBalance)) this.price = true
        else {
          this.er = false
          this.price = false
          this.success = true
        }
      }
      if(this.ShowCode !== this.ShowCodeStr) {
        this.er = true
      }

    },
    cancelStr(){
      this.clearCodeStr()
    },

  },
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
.nav_down{
  margin-top: 95px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  .item{
    border: #49DB95 1px solid;
    border-radius: 10px;
    padding: 10px;
  }
}
.container{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input{
    height: 40px;
    margin-top: 10px;
  }
}
.img{
  position: absolute;
  top: 94px;
  left: 10px;
  width: 410px;
  height: 250px;
  background: no-repeat url("@/assets/XD4x.gif") center;
  background-size: 100%;

}
</style>