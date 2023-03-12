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
        <shop-filter-tag></shop-filter-tag>
        <shop-products></shop-products>
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
      :fullscreen="dialogFullscreen"
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
import ShopFilterTag from '@/components/Shop/ShopFilterTag.vue';
import ShopProducts from '@/components/Shop/ShopProducts';

export default {
  name: 'Shop',
  components: {
    ShopAppbar,
    ShopCartSidebar,
    ShopBottomNavigation,
    ShopFilterSearch,
    ShopFilterCategory,
    ShopFilterTag,
    ShopProducts,
  },
  computed: {
    ...mapGetters({
      snackbarText: 'appsnackbar/text',
      snackbarShow: 'appsnackbar/show',
      dialogShow: 'appdialog/show',
      dialogComponent: 'appdialog/component',
      dialogMaxwidth: 'appdialog/maxwidth',
      dialogFullscreen: 'appdialog/fullscreen',
    }),
  },
  created () {
    Promise.all([
      this.getProductList(),
      this.getCategoryList(),
      this.getTagList(),
    ]);
  },
  destroyed () {
    Promise.all([
      this.resetProductList(),
      this.resetCategoryList(),
      this.resetTagList(),
    ]);
  },
  methods: {
    ...mapActions({
      getProductList: 'products/list/get',
      getCategoryList: 'categories/list/get',
      getTagList: 'tags/list/get',
      resetProductList: 'products/list/reset',
      resetCategoryList: 'categories/list/reset',
      resetTagList: 'tags/list/reset',
      closeSnackbar: 'appsnackbar/close',
      closeDialog: 'appdialog/close',
    }),
  },
};
</script>
