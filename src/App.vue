<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/id2323">ID</router-link>
  </div>
  <router-view/>
</template>

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
}
</style>
