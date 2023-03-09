<template>
  <div class="d-flex justify-content-between align-center">
    <v-text-field
      class="mr-4"
      prepend-inner-icon="mdi-magnify"
      solo
      hide-details
      clearable
    ></v-text-field>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          @click="toggleLayout"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </template>
      Toggle Layout
    </v-tooltip>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShopFilterSearch',
  computed: {
    ...mapGetters({
      icon: 'shop/products/layout/icon',
    }),
  },
  methods: {
    ...mapActions({
      toggleLayout: 'shop/products/layout/toggle',
    }),
  },
};
</script>
