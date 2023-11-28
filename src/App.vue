<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <r-table>
      <slot></slot>
    </r-table>
  </div>
</template>

<script>
import RTable from './components/RTable.vue'

export default {
  name: 'App',
  components: {
    RTable
  },

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
