import { ErrType } from '../errorCode';

/* dataset: 502000 */
export enum AppErrEnum {
  unExist = 'unExist',
  unAuthApp = 'unAuthApp',
  authExpired = 'authExpired'
}
const appErrList = [
  {
    statusText: AppErrEnum.unExist,
    message: '应用不存在'
  },
  {
    statusText: AppErrEnum.unAuthApp,
    message: '无权操作该应用'
  },
  {
    statusText: AppErrEnum.authExpired,
    message: '当前VIP权益记录已失效或权限不足，请购买后从应用页面重新进入'
  }
];
export default appErrList.reduce((acc, cur, index) => {
  return {
    ...acc,
    [cur.statusText]: {
      code: 502000 + index,
      statusText: cur.statusText,
      message: cur.message,
      data: null
    }
  };
}, {} as ErrType<`${AppErrEnum}`>);
