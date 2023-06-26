<script setup>

import router from './router';
import aboutview from './views/AboutView.vue'

import homeview from './views/HomeView.vue'

</script>

<template>

  <header>

    HEADER
  
  </header>

  <aside>
    
    <nav class="menu">
      
      <router-link to="/">Inicial</router-link>

      <br>

      <router-link to="about">Sobre</router-link>

      <br>

      <router-link to="games">Games</router-link>

      <br>

      <router-link to="videos">videos</router-link>

    </nav>

  </aside>

  <main>

    <router-view/>

  </main>

  <footer>
    
    FOOTER

  </footer>

</template>

<style scoped>

.menu {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 15px white groove;
  border-radius: 20px;
  padding: 40px;
  font-size: 25px;
  box-shadow: 10px 10px 10px 0px rgb(3, 192, 3);
  background-color: black;
}

</style>
