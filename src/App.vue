<template>
  <div id="app">
    <vue-drawer-layout
    
      >
    
      <div class="drawer" slot="drawer">
        <div class="text">This is drawer</div>
        <div v-for="(val, index) in 45" :key="index">
          <div class="menu-item">
            menu #{{index}}
          </div>
        </div>
      </div>
      <div class="content" slot="content">
        <div class="text">This is content.</div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>

      </div>
    </vue-drawer-layout>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
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
.menu-item{
  padding: 15px;
}
.drawer{
  background-color: antiquewhite;
  overflow-y: auto;
  height: 100%;
}
</style>
