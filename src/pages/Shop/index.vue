<template>
  <div class="shop-page">
    <shop-appbar></shop-appbar>
    <shop-sidebar></shop-sidebar>
    <v-main>
      <v-container
        class="app-content px-8 mt-2 mb-14"
        fluid
      >
        <div class="d-flex justify-content-between align-center">
          <v-text-field
            class="mr-4"
            prepend-inner-icon="mdi-magnify"
            solo
            hide-details
            clearable
          ></v-text-field>

          <v-btn icon>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </div>

        <div class="my-6">
          <v-slide-group
            multiple
            show-arrows
          >
            <v-slide-item
              v-for="n in 25"
              :key="n"
              v-slot="{ active, toggle }"
            >
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="purple white--text"
                depressed
                rounded
                @click="toggle"
              >
                Category {{ n }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </div>

        <div class="my-4">
          <v-row>
            <v-col v-for="(n, index) in 35" :key="n+index" cols="2">
              <v-card link>
                <v-img
                  height="100px"
                  src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                ></v-img>
                <v-card-actions class="d-flex flex-column align-start">
                  <span class="subtitle-2 font-weight-light">Jin Ramen Spicy</span>
                  <span class="subtitle-2">$75</span>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <v-bottom-navigation
        :value="1"
        color="primary"
        class="justify-start px-4"
        horizontal
        fixed
      >
        <v-btn>
          <span>All Products</span>
          <v-icon>mdi-package-variant</v-icon>
        </v-btn>
        <v-btn>
          <span>Favorites</span>
          <v-icon>mdi-star-outline</v-icon>
        </v-btn>
        <v-btn>
          <span>Today's Pick</span>
          <v-icon>mdi-playlist-star</v-icon>
        </v-btn>
        <v-btn>
          <span>Discounted</span>
          <v-icon>mdi-sale-outline</v-icon>
        </v-btn>
        <v-btn>
          <span>Categories</span>
          <v-icon>mdi-archive-outline</v-icon>
        </v-btn>
        <v-btn>
          <span>Tags</span>
          <v-icon>mdi-tag-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </div>
</template>

<script>
import ShopAppbar from '@/components/Shop/Appbar';
import ShopSidebar from '@/components/Shop/Sidebar';

export default {
  name: 'Shop',
  components: {
    ShopAppbar,
    ShopSidebar,
  },
};
</script>
