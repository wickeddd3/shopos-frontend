<template>
  <app-dialog-content
    title="Transaction Details"
    :has-action-buttons="false"
    @cancel="$emit('cancel')"
    @close="$emit('close')"
  >
    <template v-slot:default>
      <div
        v-if="ready"
        class="pb-2"
      >
        <v-card-text class="grey lighten-4 rounded">
          <v-card-text class="white rounded pa-4 mb-4">
            <h6 class="subtitle-1 font-weight-light">
              Branch Code : {{ branchCode }}
            </h6>
            <h6 class="subtitle-1 font-weight-light">
              Branch Name : {{ branchName }}
            </h6>
          </v-card-text>

          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
          ></v-data-table>

          <v-card-text class="grey lighten-4 rounded mt-4 pa-0">
            <h6 class="subtitle-1 font-weight-medium mb-2">Payment</h6>
            <div class="d-flex justify-space-between">
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td colspan="2">{{ date }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">CASH</td>
                    </tr>
                    <tr>
                      <td>Total Items</td>
                      <td class="text-right font-weight-bold">{{ totalItems }}</td>
                    </tr>
                    <tr>
                      <td>Discounted Items</td>
                      <td class="text-right font-weight-bold">{{  totalDiscountedItems }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <v-chip
                          class="font-weight-bold"
                          color="green lighten-1"
                          text-color="white"
                          label
                          small
                        >PAID</v-chip>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td class="text-right font-weight-bold">{{ `$ ${subtotal}` }}</td>
                    </tr>
                    <tr>
                      <td>Total Percentage</td>
                      <td class="text-right font-weight-bold">{{ `${discountPercentage} %` }}</td>
                    </tr>
                    <tr>
                      <td>Total Discount</td>
                      <td class="text-right font-weight-bold">{{ `$ ${discountTotal}` }}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td class="text-right font-weight-bold">{{ `$ ${total}` }}</td>
                    </tr>
                    <tr>
                      <td>Total Paid</td>
                      <td class="text-right font-weight-bold">{{ `$ ${paymentAmount}` }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-card-text>
        </v-card-text>
      </div>
      <v-skeleton-loader
        v-else
        type="table"
      ></v-skeleton-loader>
    </template>
  </app-dialog-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'OrderDetails',
  computed: {
    ...mapGetters({
      ready: 'transactions/selected/ready',
      headers: 'transactions/selected/headers',
      branchName: 'transactions/selected/value/branch/name',
      branchCode: 'transactions/selected/value/branch/code',
      items: 'transactions/selected/value/items',
      date: 'transactions/selected/value/date',
      orderNo: 'transactions/selected/value/orderno',
      paymentAmount: 'transactions/selected/value/payment/amount',
      total: 'transactions/selected/value/total',
      subtotal: 'transactions/selected/value/subtotal',
      discountTotal: 'transactions/selected/value/discount/total',
      discountPercentage: 'transactions/selected/value/discount/percentage',
      remarks: 'transactions/selected/value/remarks',
      totalItems: 'transactions/selected/value/items/length',
      totalDiscountedItems: 'transactions/selected/value/items/discounted/length',
    }),
  },
  destroyed () {
    this.reset();
  },
  methods: {
    ...mapActions({
      reset: 'transactions/selected/reset',
    }),
  },
};
</script>
