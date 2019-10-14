<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        id="container-app"
        fluid
      >
        <v-overlay :value="overlay" :opacity="'1'">
          <v-progress-circular
            indeterminate
            color="red"
          ></v-progress-circular>
        </v-overlay>
        <v-col
          cols="12"
          md="4"
          lg="4"
          xl="4"
        >
          <v-row class="justify-center justify-md-start">
            <v-img
              src="./assets/logo.png"
              id="img-logo"
              aspect-ratio="1"
            />
          </v-row>
          <v-toolbar
            color="white"
            dark
            flat
          >
            <v-toolbar-title 
              class="headline font-weight-bold black--text" 
            >
              LOGIN
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                outlined
                v-model="login"
                v-on:keyup="btnStatus"
                label="NOME DE USUÁRIO"
                name="login"
                type="text"
              />
              <v-text-field
                    outlined
                    v-model="password"
                    v-on:keyup="btnStatus"
                    label="SENHA"
                    name="password"
                    type="password"
              />
            </v-form>
          </v-card-text>
          <v-alert
            v-if="errorlogin" 
            type="error"
          >
            <v-row align="center">
              Suas Credenciais de Login não coincidem com uma conta em nosso sistema
            </v-row>
          </v-alert>
          <v-alert
            v-if="errorblank" 
            type="error"
          >
            <v-row align="center">
              Deve ter pelo menos 2 caracteres
            </v-row>
          </v-alert>
          <v-card-actions class="justify-center">
            <v-btn
              id="btn-login"
              v-bind:disabled="btndisable"
              fab
              color="#C62828"
              large
              @click="checkForm"
            >
              <v-icon color="#fff">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col
          cols="8"
          class="d-none d-md-flex"
          id="col-img-login"
        >
          <v-img
            id="img-bg-login"
            src="./assets/Trophy_1920x1080.jpg"
          />
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Timeline from './data/db.json';
  require('./assets/style.css');

  export default {
    props: {
      source: String,
    },
    data() {
      return {
      btndisable: true,
      overlay: false,  
      login: null,
      password: null,
      errorlogin: false,
      errorblank: false,
      validation: false,
      };
    },
    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 1000)
      },
    },
    methods: {
      checkForm() {
        this.overlay = true;
        this.errorlogin = false;
        this.errorblank = false;
        for(var i=0; i < Timeline.length; i++){
          if(this.login == Timeline[i].login && this.password == Timeline[i].senha){
            this.validation = true;
            break;
          }
        }
        if (this.validation == false) {
          this.errorlogin = true;
        }
      },
      btnStatus() {
        this.errorblank = true;
        if (this.login.length >= 2 && this.password.length >= 2) {
          this.btndisable = false;
        }
      },
    },
  }
</script>