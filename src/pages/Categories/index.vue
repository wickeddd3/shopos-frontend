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
          Add Category
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row v-if="ready">
      <v-col v-for="item in items" :key="item.id" cols="2">
        <v-card>
          <v-img
            height="100px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          ></v-img>
          <v-card-actions class="d-flex justify-space-between align-center">
            <div class="d-flex flex-column align-start">
              <span
                class="subtitle-2"
                v-text="item.name"
              ></span>
              <span class="subtitle-2 font-weight-light">12 Products</span>
            </div>
            <v-menu
              min-width="100"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list dense class="py-0">
                <v-list-item @click="edit(item)">
                  <v-list-item-icon class="mx-1">
                    <v-icon small>mdi-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="index in 12"
        :key="`loading-${index}`"
        cols="auto"
      >
        <v-card height="160">
          <v-skeleton-loader
            type="card"
            min-width="220"
            max-width="220"
            height="110"
          ></v-skeleton-loader>
          <v-skeleton-loader type="list-item"></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
  </app-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'lodash';

export default {
  name: 'Categories',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'categories/list/ready',
      items: 'categories/list/value/items',
    }),
  },
  created () {
    this.getList();
  },
  destroyed () {
    this.resetList();
  },
  methods: {
    ...mapActions({
      getList: 'categories/list/get',
      resetList: 'categories/list/reset',
      add: 'categories/add',
      edit: 'categories/edit',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>
