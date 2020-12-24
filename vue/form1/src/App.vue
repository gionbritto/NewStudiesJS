<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ComponentesDinamicos /> -->
    <componentes-dinamicos />
    <hr>
    <Formulario1 />
  </div>
</template>

<script>
//1° importa; 2° registra no export default; 3° usa o componente

// import HelloWorld from './components/HelloWorld.vue'
import Formulario1 from './main/Formulario1';
import ComponentesDinamicos from './main/ComponentesDinamicos';

export default {
  name: 'App',
  components: { Formulario1, ComponentesDinamicos  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
