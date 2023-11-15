<template>
  <div>
    <div class="nav">
      <div style="display: flex;align-items: center">
      <img src="@/assets/svg/sberbank-svgrepo-com.svg" style="margin-right: 10px" />
      <div v-if="providers">Кварплата</div>
        <div v-if="tel">Домашний телефон</div>
        <div v-if="gaz">Газ</div>
      </div>
      <div class="exit" @click="clearData; $router.push('/');">
          <img src="@/assets/svg/exit-svgrepo-com.svg" />
          Завершить обсуживаение
      </div>

    </div>

    <div class="title">Выберите поставщика</div>

    <div class="items" v-if="type_service">
      <div class="item" @click="type_service=false; providers=true">
        Кварплата
        <img src="@/assets/svg/rent-a-house-svgrepo-com.svg" />
      </div>
      <div class="item" @click="type_service=false; tel=true">
        Домашний телефон
        <img src="@/assets/svg/landline-svgrepo-com.svg" />
      </div>
      <div class="item" @click="type_service=false; gaz=true">
        Газ
        <img src="@/assets/svg/fire-svgrepo-com.svg" />
      </div>
    </div>
  </div>

  <div class="items" v-if="providers">
    <div class="item" @click="$router.push('score')">
      НЧЭС/ЕЭС
      <img src="@/assets/providers/comunal_1.png" />
    </div>
    <div class="item" @click="$router.push('score')">
      ЕРЦ
      <img src="@/assets/providers/comunal_2.png" />
    </div>
    <div class="item" @click="providers=false; type_service=true">
      Назад
      <img src="@/assets/svg/back-svgrepo-com.svg" />
    </div>
  </div>

  <div class="items" v-if="tel">
    <div class="item" @click="$router.push('score')">
      ПАО «Таттелеком»
      <img src="@/assets/providers/tel_1.png" />
    </div>
    <div class="item" @click="$router.push('score')">
      Дом.ру
      <img src="@/assets/providers/tel_2.png" />
    </div>
    <div class="item" @click="tel=false; type_service=true">
      Назад
      <img src="@/assets/svg/back-svgrepo-com.svg" />
    </div>
  </div>

  <div class="items" v-if="gaz">
    <div class="item" @click="$router.push('score')">
      ПАО «Газпром»
      <img src="@/assets/providers/gaz.png" />
    </div>
    <div class="item" @click="gaz=false; type_service=true">
      Назад
      <img src="@/assets/svg/back-svgrepo-com.svg" />
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
 data(){
   return{
     type_service: true,
     providers: false,
     tel: false,
     gaz: false,
   }
 },
  ...mapMutations(['cancel']),
 methods:{
   clearData(){
     this.cancel();
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

.title{
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 25px;
}
.items{
  display: flex;

  .item{
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 120px;
    height: 70px;
    border-radius: 10px;
    border: solid #49DB95 1px;
    padding: 8px;
    justify-content: space-around
  }
  img{
    width: 25px;
    margin-left: 80px;
  }
}
.exit{
  width: 150px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: solid #ff0000 1px;
}
</style>