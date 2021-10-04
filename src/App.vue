<template>
  <div id="app">
    <div id="nav">
      <div>
        <v-toolbar light>
           <v-app-bar-nav-icon></v-app-bar-nav-icon>
           <router-link to="/">Home</router-link>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
        <router-link to="/cart">Cart</router-link>
      </v-btn>
       
      
        </v-toolbar>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default {
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: beige;
}

#nav {
  padding: 30px;
  color: black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
