<template>
  <v-card
    link
    @click="$emit('click:item')"
  >
    <v-img
      height="100px"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
    ></v-img>
    <v-card-actions class="d-flex flex-column align-start">
      <span
        class="subtitle-2 font-weight-light"
      >
        {{ item.name }}
      </span>
      <span
        class="subtitle-2"
      >
        {{ `$ ${item.price}` }}
      </span>
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
};
</script>
