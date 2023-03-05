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
              v-for="item in categoryItems"
              :key="item.id"
              v-slot="{ active, toggle }"
            >
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="primary white--text"
                depressed
                rounded
                small
                @click="toggle"
              >
                {{ item.name }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </div>

        <div class="my-4">
          <v-row>
            <v-col v-for="item in productItems" :key="item.id" cols="2">
              <v-card link @click="addToCart(item)">
                <v-img
                  height="100px"
                  src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                ></v-img>
                <v-card-actions class="d-flex flex-column align-start">
                  <span class="subtitle-2 font-weight-light">{{ item.name }}</span>
                  <span class="subtitle-2">{{ `$ ${item.price}` }}</span>
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
    <app-snackbar
      :show="snackbarShow"
      :text="snackbarText"
      @close="closeSnackbar"
    ></app-snackbar>
    <app-dialog
      :show="dialogShow"
      :component="dialogComponent"
      :max-width="dialogMaxwidth"
      :fullscreen="true"
      transition="dialog-bottom-transition"
      @cancel="closeDialog"
      @close="closeDialog"
    ></app-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ShopAppbar from '@/components/Shop/Appbar';
import ShopSidebar from '@/components/Shop/Sidebar';

export default {
  name: 'Shop',
  components: {
    ShopAppbar,
    ShopSidebar,
  },
  computed: {
    ...mapGetters({
      snackbarText: 'appsnackbar/text',
      snackbarShow: 'appsnackbar/show',
      dialogShow: 'appdialog/show',
      dialogComponent: 'appdialog/component',
      dialogMaxwidth: 'appdialog/maxwidth',
      productReady: 'products/list/ready',
      productLoading: 'products/list/loading',
      productItems: 'products/list/value/items',
      categoryReady: 'categories/list/ready',
      categoryItems: 'categories/list/value/items',
    }),
  },
  created () {
    Promise.all([
      this.getProductList(),
      this.getCategoryList(),
    ]);
  },
  destroyed () {
    Promise.all([
      this.resetProductList(),
      this.resetCategoryList(),
    ]);
  },
  methods: {
    ...mapActions({
      getProductList: 'products/list/get',
      getCategoryList: 'categories/list/get',
      resetProductList: 'products/list/reset',
      resetCategoryList: 'categories/list/reset',
      addToCart: 'cart/value/items/add',
      closeSnackbar: 'appsnackbar/close',
      closeDialog: 'appdialog/close',
    }),
  },
};
</script>
