import CartStore from './CartStore';
import OrderStore from './OrderStore';

/**
 * 根store
 * @class RootStore
 * CartStore 为购物车页面的数据
 * orderStore 为订单列表页数据
 */
class RootStore {
  constructor() {
    this.CartStore = new CartStore(this);
    this.OrderStore = new OrderStore(this);
  }
}

// 返回RootStore实例
export default new RootStore();
