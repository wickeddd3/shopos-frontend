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
import AppContent from '@/components/App/AppContent';

export default {
  name: 'Branches',
  components: {
    AppContent,
  },
  computed: {
    ...mapGetters({
      ready: 'branches/list/ready',
      headers: 'branches/list/headers',
      loading: 'branches/list/value/loading',
      items: 'branches/list/value/items',
      serverItemsLength: 'branches/list/value/items/server/items/length',
      footerOptions: 'branches/list/footer/options',
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
  methods: {
    ...mapActions({
      getList: 'branches/list/get',
    }),
  },
};
</script>
