<template>
  <div>
    <canvas :ref="idName"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/dist/Chart.min.js';

export default {
  name: 'LineChart',
  props: {
    idName: {
      type: String,
      default: 'lineChart',
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    labels: {
      type: Array,
      default: () => [],
      required: true,
    },
    data: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data () {
    return {
      chart: null,
    };
  },
  watch: {
    data () {
      this.updateChart();
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart () {
      const ctx = this.$refs[this.idName].getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            type: 'line',
            label: this.label,
            data: this.data,
            backgroundColor: 'rgb(163,250,194)',
            borderColor: 'rgb(99,185,131)',
            fill: false,
            tension: 0.01,
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        },
      });
    },
    updateChart () {
      this.chart.data = {
        labels: this.labels,
        datasets: [{
          type: 'line',
          label: this.label,
          data: this.data,
          backgroundColor: 'rgb(163,250,194)',
          borderColor: 'rgb(99,185,131)',
          fill: false,
          tension: 0.01,
          borderWidth: 1,
        }],
      },
      this.chart.update();
    },
  },
};
</script>
