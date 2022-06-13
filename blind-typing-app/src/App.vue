<template>
  <div id="app" class="container">
    <v-app>
      <page-header></page-header>
      <a @click="userInfo=true">login</a>
      <main>
        <v-container fluid>
          <!--<div v-if="userinfo">
        <div v-if="login">
          <login></login>
        </div>
        <div v-else>
          <register></register>
        </div>
      </div>
      <div v-if="menu">
        <home @chosenlevel="chosenlevel($event)" />
      </div>
      <div v-else>
        <timer @stop="time($event)" />
        <exercise :level="this.level" :org="this.quote" @next="next" @back="back" />
      </div>-->
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Exercise from './components/Exercise.vue';
  import Register from './components/Register.vue';
  //  import Login from './components/Login.vue';
  import Timer from './components/Timer.vue';
  import axios from 'axios';
  import PageHeader from './components/Header.vue';

  export default {
    name: 'app',
    components: {
      Home,
      Exercise,
      Register,
      //     Login,
      Timer,
      PageHeader
    },
    data() {
      return {
        menu: true,
        quote: '',
        level: 0,
        currIndex: [1, 1, 1],
        time: '00:00',
        login: false,
        userInfo: false
      }
    },
    methods: {
      chosenLevel(levelId) {
        this.level = levelId
        this.menu = false
      },
      loadQuote() {
        // GET request to server to send the current quote

      },
      stop(t) {
        this.time = t

        // POST request to server with current time.
      },
      next() {
        // advance the index of the current level so server won't send same quote
        currIndex[level - 1]++
        // Call for loadQuote function again to get next quote
        loadQuote()
      },
      back() {
        // advance the current level index so progress won't be lost
        currIndex[level - 1]++
        // Show menu again
        menu = true
      }
    }
  };
</script>

<style>

  li {
    list-style:none;
    list-style-type:none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
