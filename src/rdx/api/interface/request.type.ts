export interface IRequest {
  url: string;
  method: string;
  params?: any;
  body?: any;
}

export interface IDataSend {
  uri: string;
  type: string;
  name: string;
  size: number;
}

export enum EPaginationHeaders {
  PAGE_LIMIT = 'x-page-limit',
  PAGE_OFFSET = 'x-page-offset',
  CURRENT_PAGE = 'x-current-page',
  TOTAL_PAGES = 'x-total-pages',
  TOTAL_RECORDS = 'x-total-records',
}
export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
}
