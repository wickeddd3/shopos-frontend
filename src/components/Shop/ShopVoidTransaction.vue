<template>
  <v-dialog
    :value="dialog"
    max-width="500px"
    persistent
  >
    <v-card>
      <v-card-text class="py-8 text-center">
        <h6
          class="text-h6 font-weight-medium mb-8"
        >
          Are you sure?
        </h6>
        <h6
          class="subtitle-1 font-weight-light"
        >
          This action will reset the cart. Click 'Confirm' to proceed.
        </h6>
      </v-card-text>
      <v-divider class="mx-5"></v-divider>
      <v-card-actions class="pa-5">
        <v-btn
          depressed
          class="px-12 mr-4"
          @click="cancel"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          class="primary px-12"
          type="submit"
          @click="confirm"
        >
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShopVoidTransaction',
  computed: {
    ...mapGetters({
      dialog: 'cart/value/dialog',
    }),
  },
  methods: {
    ...mapActions({
      confirm: 'cart/value/void/prompt/confirm',
      cancel: 'cart/value/void/prompt/cancel',
    }),
  },
};
</script>
