<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-icon class="mx-4">mdi-billiards</v-icon>
      <v-toolbar-title class="mr-12 align-center">Project-One</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>LOGIN</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>Create new account</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  v-model="login"
                    label="Login"
                    name="login"
                    type="text"
                    counter="50"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                    counter="50"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="secondary" @click="checkForm">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app color="secondary">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// import axios from 'axios';

  export default {
    props: {
      source: String,
    },
    data() {
      return {
      login: null,
      password: null,
      };
    },
    methods: {
      checkForm() {
        if ((this.login && this.login.length <= 50) && (this.password && this.password.length <= 50)) {
          // var login = this.login
          // var password = this.password
          this.$http.post('http://jsonplaceholder.typicode.com/posts', {
            title: 'beleza, mano tlg',
            body: 'hoje eu estou feliz a bessa',
            userid: 1,
          }).then(function(data){
            console.log(data);
          });
        }
      }
    },
  }
</script>