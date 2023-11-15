<template>
  <div class="terminal">
    <div class="img">
      <div class="display__term">
        <router-view></router-view>
      </div>
      <Buttons class="btns" />
    </div>
  </div>
</template>

<script>
import Buttons from "@/components/Buttons.vue";
import Start from "@/components/Start.vue";
export default {
  components:{
    Start,
    Buttons
  }
}
</script>

<style lang="scss" scoped>
.terminal{
  margin-top: 10px;
}
.img{
  background-size: cover;
  background: no-repeat url("@/assets/maxresdefault1.jpg");
  -webkit-background-size: cover; /* For WebKit*/
  -moz-background-size: cover;    /* Mozilla*/
  -o-background-size: cover;      /* Opera*/
  background-size: cover;
  width: 1000px;
  height: 1000px;
}
.display__term{
  z-index: 2;
  position: relative;
  top:336px;
  left:215px;
  background-color: #fff;
  height: 347px;
  width: 425px;
  border-radius: 15px;

}

.btns{
  position: relative;
  top:384px;
  left:348px;
}
</style>