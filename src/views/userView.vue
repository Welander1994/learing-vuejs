<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
const route = useRoute();

const user = ref([])

onMounted(() => {
 const allUser = JSON.parse(localStorage.getItem('persons'));
  user.value = allUser[route.params.id]
})



</script>

<template>
    <div>
        User id: {{ route.params.id }}<br>
        Firstname: {{ user.firstname }}<br>
        Lastname: {{ user.lastname }}<br>
        Email: {{ user.email }}
    </div>
</template>

<style lang="scss" scoped>

div {
  color: white;
}

</style>