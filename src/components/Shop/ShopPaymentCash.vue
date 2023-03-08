<template>
  <div>
    <v-row align="center" class="mb-2">
      <v-col>
        <span class="d-flex justify-space-between primary white--text pa-4">
          <span class="text-h6 font-weight-regular">Change</span>
          <span class="text-h6 font-weight-regular">{{ change }}</span>
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
            @click="inputValue(1)"
          >1</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(2)"
          >2</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(3)"
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
            @click="inputValue(4)"
          >4</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(5)"
          >5</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(6)"
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
            @click="inputValue(7)"
          >7</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(8)"
          >8</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(9)"
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
            @click="inputValue('.')"
          >.</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue(0)"
          >0</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            class="text-h5 px-8 py-12"
            color="grey lighten-5"
            block
            x-large
            depressed
            @click="inputValue('delete')"
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
          :disabled="disabled"
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
  name: 'ShopPaymentCash',
  computed: {
    ...mapGetters({
      loading: 'cart/value/loading',
      disabled: 'cart/value/disabled',
      change: 'cart/value/change',
      paymentAmount: 'cart/value/payment/amount',
    }),
  },
  methods: {
    ...mapActions({
      completeTransaction: 'cart/payment/complete',
      inputValue: 'cart/value/payment/amount/input/value',
    }),
  },
};
</script>
