<template>
  <app-content>
    <v-row>
      <v-col
        xl="5"
        lg="5"
        md="8"
        sm="12"
        xs="12"
      >
        <validation-observer v-slot="{ handleSubmit, invalid }" slim>
          <v-form
            ref="form"
            @submit.prevent="handleSubmit(submit)"
          >
            <v-card>
              <v-card-title class="body-1 font-weight-bold">Add New User</v-card-title>
              <v-card-text class="pt-4">
                <error-message
                  :status="null"
                  :errors="{}"
                ></error-message>
                <validation-provider
                  v-slot="{ errors }"
                  vid="name"
                  name="Name"
                  rules="required|max:254"
                >
                  <v-text-field
                    :error-messages="errors"
                    label="Name"
                    outlined
                    dense
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  vid="email"
                  name="Email"
                  rules="required|email"
                >
                  <v-text-field
                    :error-messages="errors"
                    label="Email"
                    outlined
                    dense
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  vid="password"
                  name="Password"
                  rules="required|min:8"
                >
                  <v-text-field
                    :error-messages="errors"
                    label="Password"
                    outlined
                    dense
                  ></v-text-field>
                </validation-provider>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="pa-4">
                <v-btn
                  to="/users"
                  color="primary"
                  text
                  exact
                >Back to users</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="invalid"
                  :loading="false"
                  color="primary"
                  type="submit"
                  class="px-4"
                >
                  Create user
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </app-content>
</template>

<script>
import AppContent from '@/components/App/AppContent';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'CreateUser',
  components: {
    AppContent,
    ErrorMessage,
  },
  methods: {
    submit () {

    },
  },
};
</script>
