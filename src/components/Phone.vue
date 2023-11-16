<template>
  <div class="wrap">
  <div class="phone">
    <div class="wallpaper">
      <transition name="fade">
     <Notification style="margin-top: 140px" v-if="ShowSms" :value="valueSms()" />
      </transition>

      <transition name="fade">
        <Notification v-if="ShowSmsBalance" :value="valueSms2()" />
      </transition>

      <transition name="fade">
        <Notification v-if="ShowSmsCode" :value="valueSms3()" />
      </transition>

    </div>
  </div>
    <button @click="updateMoney" class="btn">Обновть баланс</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Notification from "@/components/Notification.vue";

export default {
  components: {Notification},
computed: mapGetters(['getTel', 'ShowSms', 'ShowSmsBalance', 'ShowBalance', 'ShowSmsCode', 'ShowCode']),
  methods:{
  ...mapMutations(['updateTel', 'updateBalance', 'updateSmsBalance']),
    generateTel(){
      this.updateTel();
    },
    valueSms(){
    return `Ваш номер телефона ${this.getTel}`
    },
    valueSms2(){
      return `Ваш баланс: ${this.ShowBalance} руб.  `
    },
    valueSms3(){
      return `Код подтверждения: ${this.ShowCode} `
    },
    updateMoney (){
    this.updateSmsBalance()
    this.updateBalance()
    }

  },
  mounted() {
  this.generateTel()
  }
}
</script>

<style lang="scss" scoped>
.phone{
  width: 197px;
  height: 403px;
  background: no-repeat url("@/assets/phone/phone.png") center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wallpaper{
  margin-right: 2px;
  border-radius: 25px;
  background: no-repeat url("@/assets/phone/iphone.png") center;
  width: 178px;
  height: 389px;
  background-size: 100% 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.wrap{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center
}
.btn{
  margin-top: 10px;
}
</style>