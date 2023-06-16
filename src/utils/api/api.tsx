import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosRequestConfig } from 'axios';
import { signOut } from '../../rdx/actions/user';
import { IRequest } from '../../rdx/api';

/**
 * @module utils/http
 * @description Support utility functions for networking
 */

/**
 * HTTP Client
 */

const apiConfigDev: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/',
};

const apiConfigStaging: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/',
};

const apiConfigProduction: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/',
};

// TODO: Update for the right environment.
export const serverUrl = apiConfigDev.baseURL;

export const getUserInfo = async () => {
  const userInfo = await AsyncStorage.getItem('userInfo');

  return userInfo != null ? JSON.parse(userInfo) : null;
};

export class ApiClient {
  static _dispatch: (arg: any) => any | null;
  static setDispatch(dispatch: (arg: any) => any) {
    ApiClient._dispatch = dispatch;
  }
  prefix: string = '';
  constructor(v = '', prefix = serverUrl) {
    this.prefix = `${prefix}${v}`;
  }

  /**
   *
   * @param requestUrl
   * @param params
   * @param {RequestOptions} options
   * @returns {Promise<*>}
   */
  get(requestUrl: string, params?: any, options?: any) {
    return this.request(
      {
        url: requestUrl,
        method: 'get',
        params,
      },
      options,
    );
  }

  /**
   *
   * @param requestUrl
   * @param payload
   * @param {RequestOptions} options
   * @returns {Promise<*>}
   */
  patch(requestUrl: string, payload: any = {}, options: any) {
    return this.request(
      {
        url: requestUrl,
        method: 'patch',
        body: payload,
      },
      options,
    );
  }

  /**
   *
   * @param requestUrl
   * @param payload
   * @param {RequestOptions} options
   * @returns {Promise<*>}
   */
  post(requestUrl: string, payload: any = {}, options?: any) {
    return this.request(
      {
        url: requestUrl,
        method: 'post',
        body: payload,
      },
      options,
    );
  }

  /**
   *
   * @param requestUrl
   * @param payload
   * @param {RequestOptions} options
   * @returns {Promise<*>}
   */
  delete(requestUrl: string, payload: any = {}, options?: any) {
    return this.request(
      {
        url: requestUrl,
        method: 'delete',
        body: payload,
      },
      options,
    );
  }

  put(requestUrl: string, payload: any = {}, options?: any) {
    return this.request(
      {
        url: requestUrl,
        method: 'put',
        body: payload,
      },
      options,
    );
  }

  async head(requestUrl: string, options?: any) {
    return this.request(
      {
        url: requestUrl,
        method: 'head',
      },
      options,
    );
  }

  /**
   *
   * @param {Object} request
   * @param {String} request.url
   * @param {String} request.method
   * @param {Body} request.params
   * @param {Object} request.body
   * @param {RequestOptions} options
   * @returns {Promise<*|{response, options}>}
   */

  async request(
    { url, method, params = {}, body }: IRequest,
    options: any = {},
  ) {
    const init = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'same-origin',
      body: '',
    };

    if (method !== 'get' && body) {
      init.body = JSON.stringify(body);
    }
    const prefix = options.prefix || this.prefix;

    const res = await fetch(`${prefix}/${url}`, init as RequestInit);

    return this._handleResponse(res, {
      ...options,
      requestUrl: `${this.prefix}/${url}`,
      requestInit: init,
    });
  }

  /**
   * @param {Object} _res - fetch response
   * @param {RequestOptions} options
   * @returns {Promise<{response: {ok}, options}|{ok}|Promise<*|null|undefined>>}
   * @private
   */
  async _handleResponse(_res: any, options: any) {
    let res = _res;

    if (!res.ok) {
      if (res.status == 500 || res.status == 501 || res.status == 502) {
        try {
          const message = await res.json();

          return await this._handleError(res, {
            ...options,
            message: message.message,
          });
        } catch (error) {
          return await this._handleError(res, {
            ...options,
            message: error,
            // noError: res.status == 401,
          });
        }
      }
      if (res.status == 304) {
        return res;
      }
      // if (
      //   options.requestUrl.match('api/Notification/installations/') &&
      //   options.requestInit.method === 'delete' &&
      //   res.status == 401
      // ) {
      //   return res;
      // }

      try {
        const message = await res.json();

        await this._handleError(res, {
          ...options,
          message: message.message,
          noError: res.status == 401,
        }); // == comparison needed for comparing of numbers and strings, i.e. 401 == '401' etc.

        if (res.status == 401) {
          // == comparison needed for comparing of numbers and strings, i.e. 401 == '401' etc.
          const res = await fetch(options.requestUrl, options.requestInit);
          if (!res.ok) {
            return;
          }
        }

        if (res.status != 500 || res.status != 501 || res.status != 502) {
          return await this._handleError(res, {
            ...options,
            message: message.message,
            // noError: res.status == 401,
          });
        }
      } catch (e: any) {
        return await this._handleError(res, {
          ...options,
          message: e.message || res.status,
          // noError: res.status == 401,
        });
      }

      return;
    }

    if (options.requestInit?.method === 'head' || options.withoutBody) {
      return res;
    }

    if (options.parseAsText) {
      const result = await res.text();
      return result;
    }

    const resData = await res.json(); // chekc error resData.error

    if (options.returnHeaders) {
      return {
        response: resData,
        options: { headers: res.headers },
      };
    }
    return resData;
  }

  /**
   *
   * @param {Object} res - fetch response
   * @param {RequestOptions} options
   * @param {RequestOptions} options.silent
   * @returns {Promise<Array|null>}
   * @private
   */
  async _handleError(res: any, options?: any): Promise<any> {
    await Promise.all(
      this._errorHandlers(res.status, options.message).map(
        async (cb: (res?: any, options?: any) => any) => cb(res, options),
      ),
    );
    if (options.returnError) {
      return res;
    }
    if (options.noError) {
      return null;
    }
    throw new Error(options.message);
  }

  async fileLoader(path: string, data: any, options: any = {}) {
    const body = new FormData();
    body.append('file', data);
    body.append('id', data.name);

    const prefix = this.prefix + (options.prefix || '');
    const method = options.method || 'POST';

    const res = await fetch(`${prefix}/${path}`, {
      method,
      body,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...options.headers,
      },
    });

    return await this._handleResponse(res, options);
  }

  _errorHandlers: any = (status: string | number, message?: string) => {
    return {
      [status]: [(res: any) => res],
      'No Internet': [],
      400: [() => console.log(message || '400 Bad Request', 'Error')],
      500: [() => console.log('500 ' + message, 'Warning')],
    }[status];
  };
}

export default class Api {
  apiClient;

  constructor() {
    this.apiClient = new ApiClient();
  }
}
