<script setup>


</script>


<template>

  <h1>

    Sobre

  </h1>

    <button @click="$router.push({name:'home'})" >

    Inicio

    </button>

    <button @click="$router.push({name:'games'})" >

    Games

    </button>

    <button @click="$router.push({name:'videos'})" >

      Videos

    </button>

</template>

<style>

button {
    margin: 10px;
  }

  h1 {
    margin: 10px;
  }

</style>
