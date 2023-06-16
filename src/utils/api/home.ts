import Api from './api';

export default class extends Api {
  getAllUsers(options: string, params: {}) {
    return this.apiClient.get(`api/${options}`, {}, params);
  }
}
