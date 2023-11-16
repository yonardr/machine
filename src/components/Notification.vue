<template>
  <div class="notification">
    <img src="@/assets/phone/Icon.png"/>
    <div>
      <div class="filed">
        <div class="title">Сообщения</div>
        <div class="time">1m ago</div>
      </div>
      <div class="des">{{value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: ''
  }
}
</script>

<style lang="scss" scoped>
.notification{
  font-family: SFProText,serif;
  margin-bottom: 2px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  width: 173px;
  height: 50px;
  padding: 8px;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: rgba(37, 37, 37, 0.50);

  backdrop-filter: blur(40px);
  align-self: stretch;

  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
  .title{
    color: var(--label-color-dark-primary, #FFF) ;
    font-size: 10px;
    margin-bottom: 3px;
  }
  .filed{
    display: flex;
  }
  img{
    width: 25px;
  }
  .time{
    color: var(--label-color-dark-secondary, rgba(235, 235, 245, 0.60));
    font-size: 9px;
    font-weight: 400;
    margin-left: 40px;
  }
  .des{
    font-size: 8px;
    color: var(--label-color-dark-primary, #FFF);
    font-weight: 400;
  }
}
</style>