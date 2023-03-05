<template>
  <div class="shop-page">
    <shop-appbar></shop-appbar>
    <shop-sidebar></shop-sidebar>
    <v-main>
      <v-container
        class="app-content px-8 mt-2 mb-14"
        fluid
      >
        <search-filter></search-filter>
        <category-filter></category-filter>

        <div class="my-4">
          <v-row>
            <v-col v-for="item in productItems" :key="item.id" cols="2">
              <product-grid
                :item="item"
                @click:item="addToCart(item)"
              ></product-grid>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <bottom-navigation></bottom-navigation>
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
import BottomNavigation from '@/components/Shop/BottomNavigation';
import SearchFilter from '@/components/Shop/SearchFilter.vue';
import CategoryFilter from '@/components/Shop/CategoryFilter.vue';
import ProductGrid from '@/components/Shop/ProductGrid';

export default {
  name: 'Shop',
  components: {
    ShopAppbar,
    ShopSidebar,
    BottomNavigation,
    SearchFilter,
    CategoryFilter,
    ProductGrid,
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
