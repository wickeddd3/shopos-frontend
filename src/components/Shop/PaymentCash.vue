<template>
  <div>
    <v-row align="center" class="mb-2">
      <v-col>
        <span class="d-flex justify-space-between primary white--text pa-4">
          <span class="text-h6 font-weight-regular">Cash Due</span>
          <span class="text-h6 font-weight-regular">{{ total }}</span>
        </span>
      </v-col>
      <v-col align-self="center">
        <span class="d-flex justify-space-between grey lighten-4 pa-4">
          <span class="text-h6 font-weight-regular">Tendered</span>
          <span class="text-h6 font-weight-regular">{{ paymentAmount }}</span>
        </span>
      </v-col>
    </v-row>

    <div class="grey lighten-4 pa-4">
      <v-row>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >1</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >2</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >3</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >4</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >5</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >6</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >7</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >8</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >9</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >.</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >0</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
          >
            <v-icon large>mdi-close-box-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <v-row align="center" justify="space-between" class="mt-8">
      <v-col cols="auto">

      </v-col>
      <v-col align-selft="end" cols="auto">
        <v-btn
          :loading="loading"
          depressed
          x-large
          @click="completeTransaction"
        >
          Complete Transaction
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PaymentCash',
  computed: {
    ...mapGetters({
      loading: 'cart/value/loading',
      total: 'cart/value/total',
      paymentAmount: 'cart/value/paymentAmount',
    }),
  },
  methods: {
    ...mapActions({
      completeTransaction: 'cart/payment/complete'
    }),
  },
};
</script>
