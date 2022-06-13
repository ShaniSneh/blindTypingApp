<template>
  <div class="register">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field v-model="username" label="Username"></v-text-field>
            <br />
            <v-text-field v-model="email" label="Email"></v-text-field>
            <br />
            <v-text-field v-model="password" label="Password"></v-text-field>
            <br />
            <div class="alert alert-danger" role="alert" v-html="error" />
            <br />
            <v-btn type="submit" @click="register" dark>Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    name: 'Register',
    data () {
      return {
        username: '',
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register() {
        try {
          await AuthenticationService.register({
            username: this.username,
            email: this.email,
            password: this.password
          })
        } catch (err) {
          this.error = err.response.data.error
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
