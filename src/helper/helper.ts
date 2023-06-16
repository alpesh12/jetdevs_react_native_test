export interface IRes {
  meta: { requestStatus: string };
}

export const isRejected = (res: IRes) =>
  res.meta.requestStatus == 'rejected' ? true : false;
