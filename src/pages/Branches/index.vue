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
              @click="add"
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
      :server-items-length="total"
      :footer-props="footerOptions"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:item.options="{ item }">
        <v-btn icon @click="edit(item)">
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
  name: 'Branches',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'branches/list/ready',
      loading: 'branches/list/loading',
      headers: 'branches/list/headers',
      items: 'branches/list/value/items',
      total: 'branches/list/value/items/total',
      footerOptions: 'branches/list/options/footer',
    }),
    options: {
      get () {
        return this.$store.getters['branches/list/options'];
      },
      set (value) {
        this.$store.dispatch('branches/list/options', value);
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
      getList: 'branches/list/get',
      resetList: 'branches/list/reset',
      add: 'branches/add',
      edit: 'branches/edit',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>
