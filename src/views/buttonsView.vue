<script setup>
import Btn_base from '../components/btn_base.vue';

const onlineStatus = "online";
const likes = 21;

</script>

<template>

  <main>
    <Btn_base :class="onlineStatus" :buttonText="onlineStatus"></Btn_base>
    <Btn_base buttonText="Messages" :likes="likes > 99 ? '99+' : likes"></Btn_base>
    
 
  </main>

</template>

<style lang="scss" scoped>
main {
  display: flex;
}
</style>