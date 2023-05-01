import initialState from '@/config/sales.state.js';
import SalesResource from '@/api/sales/SalesResource';
import moment from 'moment';
import { capitalize } from 'lodash';
import { toCurrency } from '@/utils/currency';

const resource = new SalesResource();

const state = {
  ...initialState,
};

const getters = {
  'yearly/ready': ({ yearly: { ready } }) => ready,
  'yearly/data': ({ yearly: { data } }) => data,
  'yearly/data/years': ({ yearly: { data } }) => (data || []).map(item => item.year),
  'monthly/ready': ({ monthly: { ready } }) => ready,
  'monthly/data': ({ monthly: { data } }) => data,
  'monthly/data/months': ({ monthly: { data } }) => (data || []).map(item => item.month),
  'monthly/data/months/formatted': ({ monthly: { data } }) => (data || []).map(item => ({
    ...item,
    month: moment(item.month).format('MMMM'),
  })),
  'monthly/labels': () => [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  'monthly/total': (state, getters) => {
    const monthlyData = getters['monthly/data/months/formatted'];
    const montlyLabels = getters['monthly/labels'];
    return montlyLabels.map(label => {
      const data = monthlyData.find(item => item.month === label);
      return (data ? data?.sales : 0) * 1;
    });
  },
  'daily/ready': ({ daily: { ready } }) => ready,
  'daily/data': ({ daily: { data } }) => data,
  'daily/data/days': ({ daily: { data } }) => (data || []).map(item => item.date),
  'daily/data/days/formatted': ({ daily: { data } }) => (data || []).map(item => ({
    ...item,
    date: moment(item.date).format('D'),
  })),
  'daily/labels': () => [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24', '25', '26', '27', '28',
    '29', '30', '31',
  ],
  'daily/total': (state, getters) => {
    const dailyData = getters['daily/data/days/formatted'];
    const dailyLabels = getters['daily/labels'];
    return dailyLabels.map(label => {
      const data = dailyData.find(item => item.date === label);
      return (data ? data?.sales : 0) * 1;
    });
  },
  'total/summary': ({ total }) => Object.entries(total || {}).map(item => {
    let icon = 'mdi-currency-usd';
    let total = item[1];
    if (item[0] === 'sales') {
      icon = 'mdi-chart-timeline-variant';
      total = toCurrency(total);
    } else if (item[0] === 'orders') {
      icon = 'mdi-cart-outline';
    } else if (item[0] === 'products') {
      icon = 'mdi-package-variant-closed';
    } else if (item[0] === 'branches') {
      icon = 'mdi-store-outline';
    }
    return {
      name: capitalize(item[0]),
      total,
      icon,
    };
  }),
};

const mutations = {
  'YEARLY/SET': (state, data) => { state.yearly = { ...state.yearly, ...data }; },
  'MONTHLY/SET': (state, data) => { state.monthly = { ...state.monthly, ...data }; },
  'DAILY/SET': (state, data) => { state.daily = { ...state.daily, ...data }; },
  'TOTAL/SET': (state, total) => { state.total = { ...state.total, ...total }; },
};

const actions = {
  'yearly/get': async ({ commit }) => {
    const { data } = await resource.yearly();
    commit('YEARLY/SET', { data, ready: true });
    return data;
  },
  'monthly/get': async ({ commit }, year) => {
    const params = { year };
    const { data } = await resource.monthly(params);
    commit('MONTHLY/SET', { data, ready: true });
    return data;
  },
  'daily/get': async ({ commit }, month) => {
    const params = { month };
    const { data } = await resource.daily(params);
    commit('DAILY/SET', { data, ready: true });
    return data;
  },
  'total/get': async ({ commit }, year) => {
    const params = { year };
    const { data } = await resource.total(params);
    commit('TOTAL/SET', data);
    return data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
