<script setup>
import Btn_base from './components/btn_base.vue';

const onlineStatus = "offline";
const likes = null;

</script>

<template>
  <div>
    <Btn_base class="btn" :class="onlineStatus" :buttonText="onlineStatus"></Btn_base>
    <Btn_base class="btn" buttonText="Messages" :likes="likes"></Btn_base>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>