import { observable } from 'mobx';
// 订单store
export default class OrderStore {
  @observable allDatas = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}
