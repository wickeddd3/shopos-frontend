<template>
  <app-dialog-content
    title="Add Store"
    @cancel="$emit('cancel')"
    @close="$emit('close')"
    @submit="submitForm"
  >
    <template v-slot:default>
      <v-container>
        <app-error-message
          :status="status"
          :errors="errors"
        ></app-error-message>
        <validation-provider
          v-slot="{ errors }"
          vid="code"
          name="Code"
        >
          <v-text-field
            v-model="code"
            :error-messages="errors"
            label="Store Code"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="name"
          name="Name"
        >
          <v-text-field
            v-model="name"
            :error-messages="errors"
            label="Store Name"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
      </v-container>
    </template>
  </app-dialog-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'StoreForm',
  computed: {
    ...mapGetters({
      loading: 'stores/form/loading',
      status: 'stores/form/status',
      errors: 'stores/form/errors',
    }),
    code: {
      ...mapGetters({ get: 'stores/form/value/code' }),
      ...mapActions({ set: 'stores/form/value/code' }),
    },
    name: {
      ...mapGetters({ get: 'stores/form/value/name' }),
      ...mapActions({ set: 'stores/form/value/name' }),
    },
    description: {
      ...mapGetters({ get: 'stores/form/value/description' }),
      ...mapActions({ set: 'stores/form/value/description' }),
    },
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      resetForm: 'stores/form/reset',
      submitForm: 'stores/form/submit',
    }),
  },
};
</script>
