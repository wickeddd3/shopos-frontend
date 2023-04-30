import ResourceClient from '@/api/ResourceClient';

export default class SalesResource extends ResourceClient {
  constructor () {
    super({ url: '/api/sales' });
  }

  yearly () {
    return super.get({ url: `${this._url}/yearly` });
  }

  monthly (params = { year: '' }) {
    return super.get({ url: `${this._url}/monthly`, params });
  }

  daily (params = { month: '' }) {
    return super.get({ url: `${this._url}/daily`, params });
  }
}
