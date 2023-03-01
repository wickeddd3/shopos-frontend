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
          Add Brand
        </v-tooltip>
      </v-col>
    </v-row>

    <v-list v-if="ready">
      <div v-for="item in items" :key="item.id">
        <v-list-item class="px-0">
          <v-card
            width="120"
            height="70"
            flat
          >
            <v-img
              height="70px"
              src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            ></v-img>
          </v-card>
          <v-list-item-content class="px-4">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>8 Products</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
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
          </v-list-item-action>
        </v-list-item>
        <v-divider class="my-4"></v-divider>
      </div>
    </v-list>
    <v-list v-else>
      <template v-for="index in 8">
        <v-list-item
          :key="index"
          class="px-0"
        >
          <v-list-item-content>
            <v-layout>
              <v-flex shrink>
                <v-card
                  flat
                  max-width="80"
                  min-width="80"
                  min-height="60"
                  max-height="60"
                >
                  <v-skeleton-loader
                    type="image"
                    max-width="80"
                    min-width="80"
                    min-height="60"
                    max-height="60"
                  ></v-skeleton-loader>
                </v-card>
              </v-flex>

              <v-flex>
                <v-card
                  flat
                  min-height="60"
                  max-height="60"
                >
                  <v-skeleton-loader
                    type="list-item"
                    max-width="250"
                  ></v-skeleton-loader>
                </v-card>
              </v-flex>

              <v-flex shrink>
                <v-card
                  flat
                >
                  <v-skeleton-loader type="button"></v-skeleton-loader>
                </v-card>
              </v-flex>
            </v-layout>
          </v-list-item-content>
        </v-list-item>

        <v-divider v-if="index < 8" :key="`divider-${index}`"></v-divider>
      </template>
    </v-list>
  </app-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'lodash';

export default {
  name: 'Brands',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'brands/list/ready',
      items: 'brands/list/value/items',
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
      getList: 'brands/list/get',
      resetList: 'brands/list/reset',
      add: 'brands/add',
      edit: 'brands/edit',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>

<style scoped>
.v-divider {
  margin-left: 150px;
}
</style>
