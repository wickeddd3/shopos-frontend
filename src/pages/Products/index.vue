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
          Add Product
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
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mr-2"
              icon
              v-bind="attrs"
              v-on="on"
              @click="edit(item)"
            >
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
          </template>
          Edit
        </v-tooltip>

        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="favorite(item)"
            >
              <v-icon>
                {{ item.favorite ? 'mdi-star' : 'mdi-star-outline' }}
              </v-icon>
            </v-btn>
          </template>
          {{ item.favorite ? 'Remove product as favorite' : 'Mark as favorite' }}
        </v-tooltip>
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
  name: 'Products',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'products/list/ready',
      loading: 'products/list/loading',
      headers: 'products/list/headers',
      items: 'products/list/value/items',
      total: 'products/list/value/items/total',
      footerOptions: 'products/list/options/footer',
    }),
    options: {
      get () {
        return this.$store.getters['products/list/options'];
      },
      set (value) {
        this.$store.dispatch('products/list/options', value);
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
      getList: 'products/list/get',
      resetList: 'products/list/reset',
      add: 'products/add',
      edit: 'products/edit',
      favorite: 'products/favorite',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>
