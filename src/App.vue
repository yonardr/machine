<template>
    <div class="wrapper">
      <div class="docs">
        <Document />
      </div>
      <Terminal />
      <Phone />
    </div>
</template>

<script setup>
import Terminal from "./components/Terminal.vue";
import Document from "@/components/Document.vue";
import Phone from "@/components/Phone.vue";

</script>

<style>
@font-face {
  font-family: SFProText;
  src: url('~@/assets/fonts/SFProText-Regular.ttf');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper{
  display: flex;
  justify-content: center;
}
.docs{
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & .btn{
    width: 200px;
    height: 70px;
    border-radius: 10px;
    font-size: 18px;
  }
}
</style>
