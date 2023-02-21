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
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="addStore"
            >
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </template>
          Add Store
        </v-tooltip>
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
    >
      <template v-slot:item.options="{ item }">
        <v-btn icon @click="editStore(item)">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        No data
      </template>
    </v-data-table>
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
  name: 'Stores',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'stores/list/ready',
      loading: 'stores/list/loading',
      headers: 'stores/list/headers',
      items: 'stores/list/value/items',
      total: 'stores/list/value/items/total',
      footerOptions: 'stores/list/options/footer',
    }),
    options: {
      get () {
        return this.$store.getters['stores/list/options'];
      },
      set (value) {
        this.$store.dispatch('stores/list/options', value);
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
      getList: 'stores/list/get',
      resetList: 'stores/list/reset',
      addStore: 'stores/add',
      editStore: 'stores/edit',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>
