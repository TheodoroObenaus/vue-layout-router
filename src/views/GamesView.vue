<script setup></script>

<template>

  <h1>

    Games

  </h1>

  <button @click="$router.push({name:'home'})" >

      Inicio

  </button>

    <button @click="$router.push({name:'about'})" >

      Sobre

    </button>


    <button @click="$router.push({name:'videos'})" >

        Videos

    </button>

</template>

<style scoped>

  button {
    margin: 10px;
  }
  
  h1 {
    margin: 10px;
  }

</style>
