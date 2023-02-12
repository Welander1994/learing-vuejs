<script setup>

defineProps({
    buttonText: String
})
</script>

<template>

    <button>{{ buttonText }}</button>

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