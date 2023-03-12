<template>
  <v-card
    link
    @click="$emit('click:item')"
  >

    <v-chip
      v-if="isSale"
      color="red lighten-1"
      text-color="white"
      class="font-weight-bold discount-label"
      label
      small
    >{{ discount }}</v-chip>
    <v-img
      height="100px"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
    ></v-img>
    <v-card-actions class="d-flex justify-space-between">
      <div class="d-flex flex-column align-start">
        <span
          class="subtitle-2 font-weight-light text-truncate"
        >
          {{ item.name }}
        </span>
        <span
          class="subtitle-2"
        >
          {{ `$ ${(item.price || 0)}` }}
        </span>
      </div>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-information</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ShopProductGridItem',
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
