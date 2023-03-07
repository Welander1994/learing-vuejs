<script setup>
import {ref} from 'vue';

const text = ref('What are we learning today...');





</script>

<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>

<style lang="scss" scoped>

h1, p {
  color: white;
}

input {
  border: 5px white solid;
}

</style>