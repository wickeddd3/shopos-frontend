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
            label="Category Code"
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
            label="Category Name"
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
  name: 'CategoryForm',
  computed: {
    ...mapGetters({
      loading: 'categories/form/loading',
      status: 'categories/form/status',
      errors: 'categories/form/errors',
      title: 'categories/form/title',
    }),
    code: {
      ...mapGetters({ get: 'categories/form/value/code' }),
      ...mapActions({ set: 'categories/form/value/code' }),
    },
    name: {
      ...mapGetters({ get: 'categories/form/value/name' }),
      ...mapActions({ set: 'categories/form/value/name' }),
    },
    description: {
      ...mapGetters({ get: 'categories/form/value/description' }),
      ...mapActions({ set: 'categories/form/value/description' }),
    },
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      resetForm: 'categories/form/reset',
      submitForm: 'categories/form/submit',
    }),
  },
};
</script>
