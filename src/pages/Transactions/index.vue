<template>
  <app-content>
    <v-row justify="space-between" class="mb-4">
      <v-col cols="auto">
        <v-text-field
          v-model="searchQuery"
          label="Search..."
          prepend-inner-icon="mdi-magnify"
          hide-details
          clearable
          solo
          dense
          @input="search"
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
      :server-items-length="total"
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
import { debounce } from 'lodash';

export default {
  name: 'Transactions',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'transactions/list/ready',
      loading: 'transactions/list/loading',
      headers: 'transactions/list/headers',
      items: 'transactions/list/value/items',
      total: 'transactions/list/value/items/total',
      footerOptions: 'transactions/list/options/footer',
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
  destroyed () {
    this.resetList();
  },
  methods: {
    ...mapActions({
      getList: 'transactions/list/get',
      resetList: 'transactions/list/reset',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>
