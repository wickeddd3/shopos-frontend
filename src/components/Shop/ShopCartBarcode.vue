<template>
  <v-list-item class="d-flex justify-space-between align-center py-2 px-4">
    <span class="font-weight-bold mr-8">CART</span>
    <v-text-field
      class="barcode"
      prepend-inner-icon="mdi-barcode-scan"
      hide-details
      solo
    ></v-text-field>
  </v-list-item>
</template>

<script>
export default {
  name: 'ShopCartBarcode',
};
</script>
