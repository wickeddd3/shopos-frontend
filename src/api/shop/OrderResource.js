import ResourceClient from '@/api/ResourceClient';

export default class OrderResource extends ResourceClient {
  constructor () {
    super({ url: '/api/orders' });
  }

  list (params = { per_page: 10, query: '' }) {
    return super.get({ params });
  }

  create (data) {
    return super.post(data)
      .then(response => response)
      .catch(error => error.response);
  }

  find (id) {
    return super.get({ url: `${this._url}/${id}` })
      .then(response => response)
      .catch(error => error.response);
  }
}
