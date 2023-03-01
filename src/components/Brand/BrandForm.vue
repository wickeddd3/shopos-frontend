<template>
  <app-dialog-content
    :title="title"
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
            label="Brand Code"
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
            label="Brand Name"
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
  name: 'BrandForm',
  computed: {
    ...mapGetters({
      loading: 'brands/form/loading',
      status: 'brands/form/status',
      errors: 'brands/form/errors',
      title: 'brands/form/title',
    }),
    code: {
      ...mapGetters({ get: 'brands/form/value/code' }),
      ...mapActions({ set: 'brands/form/value/code' }),
    },
    name: {
      ...mapGetters({ get: 'brands/form/value/name' }),
      ...mapActions({ set: 'brands/form/value/name' }),
    },
    description: {
      ...mapGetters({ get: 'brands/form/value/description' }),
      ...mapActions({ set: 'brands/form/value/description' }),
    },
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      resetForm: 'brands/form/reset',
      submitForm: 'brands/form/submit',
    }),
  },
};
</script>
