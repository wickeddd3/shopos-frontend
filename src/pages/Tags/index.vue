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
          Add Tag
        </v-tooltip>
      </v-col>
    </v-row>

    <v-list v-if="ready" class="px-0">
      <template v-for="item in items">
        <div :key="item.id">
          <v-list-item class="px-0">
            <v-list-item-content class="px-0">
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
          <v-divider class="my-1"></v-divider>
        </div>
      </template>
    </v-list>
    <v-list v-else>
      <template v-for="index in 8">
        <v-list-item
          :key="index"
          class="px-0"
        >
          <v-list-item-content>
            <v-layout>
              <v-flex>
                <v-card
                  flat
                  min-height="40"
                  max-height="40"
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
  name: 'Tags',
  data () {
    return {
      searchQuery: null,
    };
  },
  computed: {
    ...mapGetters({
      ready: 'tags/list/ready',
      items: 'tags/list/value/items',
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
      getList: 'tags/list/get',
      resetList: 'tags/list/reset',
      add: 'tags/add',
      edit: 'tags/edit',
    }),
    search: debounce(function () {
      this.getList({ query: this.searchQuery });
    }, 500),
  },
};
</script>
