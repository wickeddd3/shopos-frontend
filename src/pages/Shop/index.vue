<template>
  <div class="shop-page">
    <shop-appbar></shop-appbar>
    <shop-cart-sidebar></shop-cart-sidebar>
    <v-main>
      <v-container
        class="app-content px-8 mt-2 mb-14"
        fluid
      >
        <shop-filter-search></shop-filter-search>
        <shop-filter-category></shop-filter-category>

        <div class="my-4">
          <v-row>
            <v-col v-for="item in productItems" :key="item.id" cols="2">
              <shop-product-item-grid
                :item="item"
                @click:item="addToCart(item)"
              ></shop-product-item-grid>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <shop-bottom-navigation></shop-bottom-navigation>
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
import ShopAppbar from '@/components/Shop/ShopAppbar';
import ShopCartSidebar from '@/components/Shop/ShopCartSidebar';
import ShopBottomNavigation from '@/components/Shop/ShopBottomNavigation';
import ShopFilterSearch from '@/components/Shop/ShopFilterSearch.vue';
import ShopFilterCategory from '@/components/Shop/ShopFilterCategory.vue';
import ShopProductItemGrid from '@/components/Shop/ShopProductItemGrid';

export default {
  name: 'Shop',
  components: {
    ShopAppbar,
    ShopCartSidebar,
    ShopBottomNavigation,
    ShopFilterSearch,
    ShopFilterCategory,
    ShopProductItemGrid,
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
