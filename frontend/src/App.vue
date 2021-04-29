<template>
  <div id="app">
    <div>
      <nav>
        <ul>
          <li><router-link to="/cite/">Reservar cita</router-link></li>
          <li><router-link to="/consult/">Consultar especialista</router-link></li>
          <li><router-link to="/results/">Consultar resultados</router-link></li>
        </ul>
      </nav>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 0;
}
</style>
