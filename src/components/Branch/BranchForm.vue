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
          vid="store"
          name="Store"
        >
          <v-autocomplete
            v-model="store"
            :error-messages="errors"
            :loading="storeListLoading"
            :items="storeListItems"
            label="Store"
            item-text="name"
            item-value="id"
            outlined
            dense
            cache-items
            flat
            hide-no-data
          ></v-autocomplete>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="code"
          name="Code"
        >
          <v-text-field
            v-model="code"
            :error-messages="errors"
            label="Branch Code"
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
            label="Branch Name"
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
  name: 'BranchForm',
  computed: {
    ...mapGetters({
      loading: 'branches/form/loading',
      status: 'branches/form/status',
      errors: 'branches/form/errors',
      title: 'branches/form/title',
      storeListLoading: 'stores/list/loading',
      storeListItems: 'stores/list/value/items',
    }),
    store: {
      ...mapGetters({ get: 'branches/form/value/store' }),
      ...mapActions({ set: 'branches/form/value/store' }),
    },
    code: {
      ...mapGetters({ get: 'branches/form/value/code' }),
      ...mapActions({ set: 'branches/form/value/code' }),
    },
    name: {
      ...mapGetters({ get: 'branches/form/value/name' }),
      ...mapActions({ set: 'branches/form/value/name' }),
    },
    description: {
      ...mapGetters({ get: 'branches/form/value/description' }),
      ...mapActions({ set: 'branches/form/value/description' }),
    },
  },
  created () {
    this.getStoreList();
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      getStoreList: 'stores/list/get',
      resetForm: 'branches/form/reset',
      submitForm: 'branches/form/submit',
    }),
  },
};
</script>
