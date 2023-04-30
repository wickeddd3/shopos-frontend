<template>
  <app-content class="v-page-dashboard">
    <v-container
      class="pa-0 mb-15"
      fluid
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between px-8">
          <h5>Monthly Sales</h5>
          <span>
            <v-select
              v-model="year"
              :items="years"
              append-icon="mdi-chevron-down"
              hide-details
              solo
              dense
              @change="getMonthlySales(year)"
            ></v-select>
          </span>
        </v-card-title>
        <v-card-text class="px-8 pb-6">
          <line-chart
            v-if="monthlyReady"
            idName="monthlySalesLine"
            label="Monthly Sales"
            :labels="monthlyLabels"
            :data="monthlyTotal"
          ></line-chart>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container
      class="pa-0 mb-15"
      fluid
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between px-8">
          <h5>Daily Sales</h5>
          <span>
            <v-select
              v-model="month"
              :items="months"
              append-icon="mdi-chevron-down"
              hide-details
              solo
              dense
              @change="getDailySales(month)"
            ></v-select>
          </span>
        </v-card-title>
        <v-card-text class="px-8 pb-6">
          <bar-chart
            v-if="dailyReady"
            idName="dailySales"
            label="Daily Sales"
            :labels="dailyLabels"
            :data="dailyTotal"
          ></bar-chart>
        </v-card-text>
      </v-card>
    </v-container>
  </app-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BarChart from '@/components/Chart/BarChart';
import LineChart from '@/components/Chart/LineChart';
import moment from 'moment';

export default {
  name: 'Dashboard',
  components: {
    BarChart,
    LineChart,
  },
  data () {
    return {
      year: null,
      month: null,
    };
  },
  computed: {
    ...mapGetters({
      years: 'sales/yearly/data/years',
      months: 'sales/monthly/data/months',
      monthlyReady: 'sales/monthly/ready',
      monthlyLabels: 'sales/monthly/labels',
      monthlyTotal: 'sales/monthly/total',
      dailyReady: 'sales/daily/ready',
      dailyLabels: 'sales/daily/labels',
      dailyTotal: 'sales/daily/total',
    }),
  },
  created () {
    const currentDate = moment();
    const currentYear = currentDate.year();
    const currentMonth = currentDate.format('YYYY-MM');
    Promise.all([
      this.getYearlySales(),
      this.getMonthlySales(currentYear),
      this.getDailySales(currentMonth),
    ]);
  },
  methods: {
    ...mapActions({
      getYearlySales: 'sales/yearly/get',
      getMonthlySales: 'sales/monthly/get',
      getDailySales: 'sales/daily/get',
    }),
  },
};
</script>
