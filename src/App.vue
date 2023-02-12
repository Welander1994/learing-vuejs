<script setup>
import Btn_base from './components/btn_base.vue';

const onlineStatus = "away";


</script>

<template>
  <div>
    <Btn_base class="btn" :class="onlineStatus" buttonText="offline"></Btn_base>
    <Btn_base class="btn" buttonText="Join us"></Btn_base>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>