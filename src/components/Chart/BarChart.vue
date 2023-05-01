<template>
  <div>
    <canvas :ref="idName"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'BarChart',
  props: {
    idName: {
      type: String,
      default: 'barChart',
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
    },
  },
  mounted () {
    this.renderChart();
  },
  methods: {
    renderChart () {
      const ctx = this.$refs[this.idName].getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: this.label,
            data: this.data,
            backgroundColor: 'rgb(53,73,94)',
            borderColor: 'rgb(245,245,245)',
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
          label: this.label,
          data: this.data,
          backgroundColor: 'rgb(53,73,94)',
          borderColor: 'rgb(245,245,245)',
          borderWidth: 1,
        }],
      };
      this.chart.update();
    },
  },
};
</script>
