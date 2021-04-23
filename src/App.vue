<template>
  <TheHeader/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000c9;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: url(./assets/parket.jpg);
  margin-bottom: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background: url(./assets/paper.jpg);
  background-size: cover;
  margin: 0;
  box-sizing: border-box;
}
</style>
