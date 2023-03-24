<script setup>
import { ref, onMounted } from 'vue';

const changePlease = ref(false);
const randomNumber = ref(Math.random());



const person = ref({
    email: '',
    firstname: '',
    lastname: ''
})

const update_user = ref({
    email: '',
    firstname: '',
    lastname: ''
})

const users = ref([
    {

        "email": "john@doe.com",
        "firstname": "John",
        "lastname": "Doe"
    },
    {

        "email": "jane@doe.com",
        "firstname": "Jane",
        "lastname": "Doe"
    },
    {

        "email": "linux_fan@jmail.com",
        "firstname": "Linus",
        "lastname": "Thorvalds"
    }
])

onMounted(() => {

    if(users){ 
        users.value = JSON.parse(localStorage.getItem('persons'));
    }

})


const changeState = (user) => {
    changePlease.value = true;
    update_user.value = user;

}

const isSubmited = ref(false);
let randomColor = ref('');


function submit() {
    randomColor.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    isSubmited.value = true;
    console.log(person.value);
    users.value.push(person.value);
    console.log(person);

    person.value = {
    email: '',
    firstname: '',
    lastname: ''
};

    localStorage.setItem('persons', JSON.stringify(users.value));
}

const deleteUser = (e) => {
    console.log(users.value, e);
    users.value.splice(e, 1)
    localStorage.setItem('persons', JSON.stringify(users.value));
}

const updateUser = (u, e) => {
    console.log(e, u);
    users.value[e] = u;
    localStorage.setItem('persons', JSON.stringify(users.value));
    changePlease.value = false;
}

</script>

<template>
    <main>
        <div class="form">
            <div class="inputs">
                <form v-on:keypress.enter @submit.prevent="submit">
                    <h2>Tilføj bruger</h2>
                    <input type="text" placeholder="Fornavn" v-model="person.firstname" required>
                    <input type="text" placeholder="Efternavn" v-model="person.lastname" required>
                    <input type="text" placeholder="Email" v-model="person.email" required>
                    <input type="submit" name="submit" :style="{ backgroundColor: randomColor }">
                </form>
            </div>
            <div class="output" v-if="isSubmited">
                <h3>Email: {{ person.email }}</h3>
                <h3>Fornavn: {{ person.firstname }}</h3>
                <h3>Efternavn: {{ person.lastname }}</h3>
            </div>
        </div>

        <div class="users" >
            <div class="user" v-for="user, index in users" :key="index">
                {{ index }}
                <h3>{{ user.email }}</h3>
                <h3>{{ user.firstname }} {{ user.lastname  }}</h3>
                

    <RouterLink :to="'/user/'+index">Se bruger</RouterLink>


                <div class="changeUser" v-if="changePlease">
                    <h2>Redigere bruger</h2>
                    <input type="text" v-model="update_user.email" :placeholder="'Email: ' +  user.email" required><br>
                    <input type="text" v-model="update_user.firstname" :placeholder="'Firstname: ' + user.firstname" required><br>
                    <input type="text" v-model="update_user.lastname" placeholder="'Lastname: ' + user.lastname" required><br>
                    <button @click="updateUser(index, update_user)" >Ændre mig</button>
                </div>

                <button v-if="!changePlease" @click="changeState(user)">change</button>
                <button @click="deleteUser(index)" >Slet mig</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: row;
    align-items: start;
    color: white;
}

.users {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80vw;

    .user {
        padding: 2vh;
        background-color: #ff1493;
        margin: 1rem;
    }
}

.form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 20vw;


    form {
        display: flex;
        flex-direction: column;
        margin: 0 2vw;
    }

    input {
        margin: 10px 0;
    }
}


.changeUser {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(50, 50, 50, 0.659);
    backdrop-filter: blur(5px);
}
</style>