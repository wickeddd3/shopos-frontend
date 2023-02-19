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
import StoreForm from '@/components/Store/StoreForm';

export default {
  name: 'Stores',
  computed: {
    ...mapGetters({
      ready: 'stores/list/ready',
      headers: 'stores/list/headers',
      loading: 'stores/list/value/loading',
      items: 'stores/list/value/items',
      serverItemsLength: 'stores/list/value/items/server/items/length',
      footerOptions: 'stores/list/footer/options',
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
  methods: {
    ...mapActions({
      getList: 'stores/list/get',
      setDialog: 'appdialog/set',
    }),
    addStore () {
      this.setDialog({
        show: true,
        component: StoreForm,
      });
    },
  },
};
</script>
