<script setup>
import {ref} from 'vue';

const text = ref('');


function changeState() {
    const input = document.getElementById('input-test');

     if (text.value.length == 0) {
      input.style.borderColor = 'white';
    }
    else if(text.value.length < 3) {
      input.style.borderColor = 'red';
    }
    else if (text.value.length < 8) {
      input.style.borderColor = 'yellow';
    }
    else {
      input.style.borderColor = 'green';
    }
       

    
}


</script>

<template>
  <div>
    <h1>{{ text }}</h1>
    <p>{{ text.length }}</p>
    <input id="input-test" v-model="text" @input="changeState">
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