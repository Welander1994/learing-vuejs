<script setup>

defineProps({
    buttonText: String,
    likes: Number
})
</script>

<template>

    <button>{{ buttonText }} <span v-if="likes"> {{ likes }} </span></button>

</template>

<style lang="scss" scoped>
div {
    display: flex;

}

.btn {
    width: 100px;
    padding: 5px 10px;
    margin: 10px;
    border-radius: 5px;
    border-width: 2px;
    background-color: rgb(24, 202, 24);
    border-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    transition: .5s;
    cursor: pointer;

    color: white;
    font-weight: 600;
    font-family: 'Segoe UI',
        Tahoma,
        Geneva,
        Verdana,
        sans-serif;


    &:hover {
        box-shadow: 0px 0px 10px rgba(197, 193, 193, 0.726);
    }

    span {
        position:relative;
        display: flex;
        justify-content: center;
        align-items: center;
        
       font-size: 12px;

        top: -20px;
        left: 20px;
        
        min-width: 20px;
        min-height: 20px;

        aspect-ratio: 1;

        padding: 2px;
        border-radius: 25px;
        background-color: red;

    }


    &.online {
        border-color: white;
        background-color: transparent;

        &::before {
            content: "";
            display: flex;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: rgb(24, 202, 24);
        }
    }

    &.away {
        border-color: white;
        background-color: transparent;

        &::before {
            content: "";
            display: flex;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: rgb(255, 217, 0);
        }
    }

    &.offline {
        border-color: white;
        background-color: transparent;

        &::before {
            content: "";
            display: flex;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: rgb(202, 24, 24);
        }
    }


}
</style>