<template>
  <v-list-item
    class="pa-2"
    link
    @click="$emit('click:item')"
  >
    <v-card class="mr-4" flat>
      <v-chip
        v-if="isSale"
        color="red lighten-1"
        text-color="white"
        class="font-weight-bold discount-label"
        label
        x-small
      >{{ discount }}</v-chip>
      <v-img
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        min-height="60"
        min-width="80"
        max-height="60"
        max-width="80"
      ></v-img>
    </v-card>

    <v-list-item-content>
      <v-list-item-title
        class="subtitle-2 font-weight-light text-truncate"
      >
        {{ item.name }}
      </v-list-item-title>
      <v-list-item-subtitle
        class="subtitle-2 black--text"
      >
        {{ `$ ${(item.price || 0)}` }}
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn
        icon
        @click.stop="showSelected(item)"
      >
        <v-icon color="grey lighten-1">mdi-information</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ShopProductRowItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isSale () {
      return parseFloat(this.item.discount_percentage || 0) > 0;
    },
    discount () {
      return `${parseFloat(this.item.discount_percentage || 0)}%`;
    },
  },
  methods: {
    ...mapActions({
      showSelected: 'products/selected/show',
    }),
  },
};
</script>

<style scoped>
.discount-label {
  position: absolute;
  z-index: 100;
  margin: 4px;
  right: 0;
  opacity: 0.8;
}
</style>
