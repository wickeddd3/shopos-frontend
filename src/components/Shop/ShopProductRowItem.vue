<template>
  <v-list-item
    class="pa-2"
    link
    @click="$emit('click:item')"
  >
    <v-card class="mr-4" flat>
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
        class="subtitle-2 font-weight-light"
      >
        {{ item.name }}
      </v-list-item-title>
      <v-list-item-subtitle
        class="subtitle-2 black--text"
      >
        {{ `$ ${item.price}` }}
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-information</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: 'ShopProductRowItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
