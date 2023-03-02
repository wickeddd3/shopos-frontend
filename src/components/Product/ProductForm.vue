<template>
  <app-dialog-content
    :title="title"
    @cancel="$emit('cancel')"
    @close="$emit('close')"
    @submit="submitForm"
  >
    <template v-slot:default>
      <v-container>
        <app-error-message
          :status="status"
          :errors="errors"
        ></app-error-message>
        <validation-provider
          v-slot="{ errors }"
          vid="branch"
          name="Branch"
        >
          <v-autocomplete
            v-model="branch"
            :error-messages="errors"
            :loading="branchListLoading"
            :items="branchListItems"
            label="Branch"
            item-text="name"
            item-value="id"
            outlined
            dense
            cache-items
            flat
            hide-no-data
          ></v-autocomplete>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="category"
          name="Category"
        >
          <v-autocomplete
            v-model="category"
            :error-messages="errors"
            :loading="categoryListLoading"
            :items="categoryListItems"
            label="Category"
            item-text="name"
            item-value="id"
            outlined
            dense
            cache-items
            flat
            hide-no-data
          ></v-autocomplete>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="brand"
          name="Brand"
        >
          <v-autocomplete
            v-model="brand"
            :error-messages="errors"
            :loading="brandListLoading"
            :items="brandListItems"
            label="Brand"
            item-text="name"
            item-value="id"
            outlined
            dense
            cache-items
            flat
            hide-no-data
          ></v-autocomplete>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="code"
          name="Code"
        >
          <v-text-field
            v-model="code"
            :error-messages="errors"
            label="Product Code"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="sku"
          name="SKU"
        >
          <v-text-field
            v-model="sku"
            :error-messages="errors"
            label="SKU"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="barcode"
          name="Barcode"
        >
          <v-text-field
            v-model="barcode"
            :error-messages="errors"
            label="Barcode"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          vid="name"
          name="Name"
        >
          <v-text-field
            v-model="name"
            :error-messages="errors"
            label="Product Name"
            outlined
            dense
          ></v-text-field>
        </validation-provider>
      </v-container>
    </template>
  </app-dialog-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductForm',
  computed: {
    ...mapGetters({
      loading: 'products/form/loading',
      status: 'products/form/status',
      errors: 'products/form/errors',
      title: 'products/form/title',
      branchListLoading: 'branches/list/loading',
      branchListItems: 'branches/list/value/items',
      categoryListLoading: 'categories/list/loading',
      categoryListItems: 'categories/list/value/items',
      brandListLoading: 'brands/list/loading',
      brandListItems: 'brands/list/value/items',
    }),
    branch: {
      ...mapGetters({ get: 'products/form/value/branch' }),
      ...mapActions({ set: 'products/form/value/branch' }),
    },
    category: {
      ...mapGetters({ get: 'products/form/value/category' }),
      ...mapActions({ set: 'products/form/value/category' }),
    },
    brand: {
      ...mapGetters({ get: 'products/form/value/brand' }),
      ...mapActions({ set: 'products/form/value/brand' }),
    },
    code: {
      ...mapGetters({ get: 'products/form/value/code' }),
      ...mapActions({ set: 'products/form/value/code' }),
    },
    sku: {
      ...mapGetters({ get: 'products/form/value/sku' }),
      ...mapActions({ set: 'products/form/value/sku' }),
    },
    barcode: {
      ...mapGetters({ get: 'products/form/value/barcode' }),
      ...mapActions({ set: 'products/form/value/barcode' }),
    },
    name: {
      ...mapGetters({ get: 'products/form/value/name' }),
      ...mapActions({ set: 'products/form/value/name' }),
    },
    description: {
      ...mapGetters({ get: 'products/form/value/description' }),
      ...mapActions({ set: 'products/form/value/description' }),
    },
  },
  created () {
    Promise.all([
      this.getBranchList(),
      this.getCategoryList(),
      this.getBrandList(),
    ]);
  },
  destroyed () {
    this.resetForm();
  },
  methods: {
    ...mapActions({
      getBranchList: 'branches/list/get',
      getCategoryList: 'categories/list/get',
      getBrandList: 'brands/list/get',
      resetForm: 'products/form/reset',
      submitForm: 'products/form/submit',
    }),
  },
};
</script>
