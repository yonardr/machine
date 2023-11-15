<template>
  <div class="start">
    <button @click="$router.push('menu')"></button>
  </div>
</template>

<script>
import Buttons from "@/components/Buttons.vue";
import router from "@/router";

export default {
  components: {Buttons}

}
</script>

<style lang="scss" scoped>
.start{
  width: 100%;
  height: 100% ;
  background: no-repeat url("@/assets/start_img.jpg") center;
  background-size: 100% 100%;
  border-radius: 15px;
}
button{
  opacity: 0;
  position: relative;
  top: 265px;
  left: 185px;
  width: 110px;
  height: 60px;
}

</style>