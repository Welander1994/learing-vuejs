<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/button">Buttons</RouterLink>
        <RouterLink to="/inputstatus">inputStatus</RouterLink>
        <RouterLink to="/binding">binding</RouterLink>
        
      </nav>
      <main>
        <RouterView />
      </main>
     
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  min-height: 10vh;

  a {
    color: white;
    text-decoration: none;
  }
}

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
  }
</style>