<template>
  <app-dialog-content
    title="Product Details"
    :has-action-buttons="false"
    @cancel="$emit('cancel')"
    @close="$emit('close')"
  >
    <template v-slot:default>
      <v-container class="d-flex">
        <div>
          <v-chip
            v-if="isSale"
            color="red lighten-1"
            text-color="white"
            class="font-weight-bold discount-label"
            label
            small
          >{{ discount }}</v-chip>
          <v-img
            height="240px"
            max-width="240px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            class="rounded"
          ></v-img>
          <h6 class="subtitle-1 font-weight-medium mt-4">
            {{ name }}
          </h6>
          <h6 class="subtitle-1 font-weight-light">
            {{ code }}
          </h6>
          <h6 class="text-h6 font-weight-bold">
            {{ `$ ${(price || 0)}` }}
          </h6>
        </div>
        <div class="px-8">
          <h6 class="subtitle-1 font-weight-medium">
            {{ branchName }}
          </h6>
          <h6 class="subtitle-1 font-weight-medium">
            {{ categoryName }}
          </h6>
          <h6 class="subtitle-1 font-weight-medium">
            {{ brandName}}
          </h6>
          <h6 class="subtitle-1 font-weight-medium">
            {{ sku }}
          </h6>
          <h6 class="subtitle-1 font-weight-medium">
            {{ barcode }}
          </h6>
          <h6 class="subtitle-1 font-weight-medium">
            {{ description }}
          </h6>
        </div>
      </v-container>
    </template>
  </app-dialog-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductDetails',
  computed: {
    ...mapGetters({
      ready: 'products/selected/ready',
      branchName: 'products/selected/value/branch/name',
      categoryName: 'products/selected/value/category/name',
      brandName: 'products/selected/value/brand/name',
      code: 'products/selected/value/code',
      sku: 'products/selected/value/sku',
      barcode: 'products/selected/value/barcode',
      name: 'products/selected/value/name',
      description: 'products/selected/value/description',
      price: 'products/selected/value/price',
      discountPercentage: 'products/selected/value/discount/percentage',
    }),
    isSale () {
      return parseFloat(this.discountPercentage || 0) > 0;
    },
    discount () {
      return `${parseFloat(this.discountPercentage || 0)}%`;
    },
  },
  destroyed () {
    this.reset();
  },
  methods: {
    ...mapActions({
      reset: 'products/selected/reset',
    }),
  },
};
</script>

<style scoped>
.discount-label {
  position: absolute;
  z-index: 100;
  margin: 4px;
  opacity: 0.8;
}
</style>
