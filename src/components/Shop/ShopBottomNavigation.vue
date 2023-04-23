<template>
  <v-bottom-navigation
    :value="0"
    color="primary"
    class="justify-start px-4"
    horizontal
    fixed
  >
    <v-btn to="/shop?filter=all" exact>
      <span>All Products</span>
      <v-icon>mdi-package-variant</v-icon>
    </v-btn>
    <v-btn to="/shop?filter=discounted" exact>
      <span>Discounted</span>
      <v-icon>mdi-sale-outline</v-icon>
    </v-btn>
    <v-btn to="/shop?filter=favorites" exact>
      <span>Favorites</span>
      <v-icon>mdi-star-outline</v-icon>
    </v-btn>
    <v-btn to="/shop?filter=recent" exact>
      <span>Recent Purchased</span>
      <v-icon>mdi-playlist-star</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'ShopBottomNavigation',
};
</script>
