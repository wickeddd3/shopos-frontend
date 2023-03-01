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
          vid="name"
          name="Name"
        >
          <v-text-field
            v-model="name"
            :error-messages="errors"
            label="Tag Name"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="description"
          name="Description"
        >
          <v-text-field
            v-model="description"
            :error-messages="errors"
            label="Tag Description"
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
  name: 'TagForm',
  computed: {
    ...mapGetters({
      loading: 'tags/form/loading',
      status: 'tags/form/status',
      errors: 'tags/form/errors',
      title: 'tags/form/title',
    }),
    name: {
      ...mapGetters({ get: 'tags/form/value/name' }),
      ...mapActions({ set: 'tags/form/value/name' }),
    },
    description: {
      ...mapGetters({ get: 'tags/form/value/description' }),
      ...mapActions({ set: 'tags/form/value/description' }),
    },
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      resetForm: 'tags/form/reset',
      submitForm: 'tags/form/submit',
    }),
  },
};
</script>
