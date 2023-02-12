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
import AppContent from '@/components/App/AppContent';

export default {
  name: 'Transactions',
  components: {
    AppContent,
  },
  computed: {
    ...mapGetters({
      ready: 'transactions/list/ready',
      headers: 'transactions/list/headers',
      loading: 'transactions/list/value/loading',
      items: 'transactions/list/value/items',
      serverItemsLength: 'transactions/list/value/items/server/items/length',
      footerOptions: 'transactions/list/footer/options',
    }),
    options: {
      get () {
        return this.$store.getters['transactions/list/options'];
      },
      set (value) {
        this.$store.dispatch('transactions/list/options', value);
      },
    },
  },
  created () {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: 'transactions/list/get',
    }),
  },
};
</script>
