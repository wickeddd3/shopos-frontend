<template>
  <v-layout
    class="pa-2"
    column
    justify-center
    align-center
  >
    <v-card
      width="500"
      outlined
      flat
    >
      <v-card-title class="px-8 primary white--text">
        s h o p o s
      </v-card-title>
      <validation-observer v-slot="{ handleSubmit, invalid }" slim>
        <v-form
          ref="form"
          class="px-8 py-6"
          @submit.prevent="handleSubmit(login)"
        >
          <h2 class="my-4 font-weight-bold mb-8">Log in to shopos</h2>
          <app-error-message
            :status="status"
            :errors="errors"
          ></app-error-message>
          <h5 class="subtitle-1 font-weight-medium mb-2">Email</h5>
          <validation-provider
            v-slot="{ errors }"
            vid="email"
            name="Email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              solo
            ></v-text-field>
          </validation-provider>
          <h5 class="subtitle-1 font-weight-medium mb-2">Password</h5>
          <validation-provider
            v-slot="{ errors }"
            vid="password"
            name="Password"
            rules="required"
          >
            <v-text-field
              v-model="password"
              :error-messages="errors"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              solo
              @click:append="show = !show"
            ></v-text-field>
          </validation-provider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="invalid"
              :loading="loading"
              color="primary"
              class="mt-2 px-8 py-5 subtitle-1 font-weight-bold text-capitalize"
              type="submit"
            >
              Log In
            </v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
    </v-card>
    <h6 class="subtitle-2 font-weight-light pa-4 grey--text text--darken-1">WickedWorks</h6>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters({
      loading: 'authentication/form/loading',
      status: 'authentication/form/status',
      errors: 'authentication/form/errors',
    }),
    email: {
      ...mapGetters({ get: 'authentication/form/value/email' }),
      ...mapActions({ set: 'authentication/form/value/email' }),
    },
    password: {
      ...mapGetters({ get: 'authentication/form/value/password' }),
      ...mapActions({ set: 'authentication/form/value/password' }),
    },
  },
  created () {
    this.reset();
  },
  methods: {
    ...mapActions({
      login: 'authentication/login',
      reset: 'authentication/form/reset',
    }),
  },
};
</script>
