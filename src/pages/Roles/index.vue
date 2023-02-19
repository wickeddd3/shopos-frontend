<template>
  <app-content>
    <v-row justify="space-between" class="mb-4">
      <v-col cols="auto">
        <v-text-field
          label="Search..."
          prepend-inner-icon="mdi-magnify"
          clearable
          solo
          dense
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </template>
          Add Branch
        </v-tooltip>
      </v-col>
    </v-row>
    <v-data-table
      v-if="ready"
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="serverItemsLength"
      :footer-props="footerOptions"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
    <v-skeleton-loader
      v-else
      type="table"
    ></v-skeleton-loader>
  </app-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Roles',
  computed: {
    ...mapGetters({
      ready: 'roles/list/ready',
      headers: 'roles/list/headers',
      loading: 'roles/list/value/loading',
      items: 'roles/list/value/items',
      serverItemsLength: 'roles/list/value/items/server/items/length',
      footerOptions: 'roles/list/footer/options',
    }),
    options: {
      get () {
        return this.$store.getters['roles/list/options'];
      },
      set (value) {
        this.$store.dispatch('roles/list/options', value);
      },
    },
  },
  created () {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: 'roles/list/get',
    }),
  },
};
</script>
