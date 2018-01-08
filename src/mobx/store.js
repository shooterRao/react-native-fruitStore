import { observable, computed, action } from 'mobx'
import cartGoods from './cartGoods'
import newGoods from './newGoods'
import categoryGoods from './catetgoryGoods'

/**
 * 根store
 * @class RootStore
 * CartStore 为购物车页面的数据
 * NewGoodsStore 为首页的数据
 * categoryGoodsStore 为分类页的数据
 * orderStore 为订单列表页数据
 */
class RootStore {   
    
    constructor() {
        this.CartStore = new CartStore(cartGoods,this)
        this.NewGoodsStore = new NewGoodsStore(newGoods,this)
        this.categoryGoodsStore = new categoryGoodsStore(categoryGoods,this)
        this.OrderStore = new OrderStore(this)
    }
}

// 订单store
class OrderStore {
    // 无须成为被观察对象
    allDatas = []

    constructor(rootStore) {
        this.rootStore = rootStore
    }
}

// 分类store
class categoryGoodsStore {
    @observable
    allDatas = {}

    constructor(data, rootStore) {
        this.allDatas = data
        this.rootStore = rootStore
    }
}

// 首页新品store
class NewGoodsStore {
    @observable
    allDatas = {}

    constructor(data, rootStore) {
        this.allDatas = data
        this.rootStore = rootStore
    }
} 

// 购物车store
class CartStore {
    @observable
    allDatas = {}

    constructor(data,rootStore) {
        this.allDatas = data
        this.rootStore = rootStore
    }

     //加
     @action
     add(money) {
        // this.allDatas.totalMoney = 0;
        this.allDatas.totalMoney += money
    }

    // 减
    @action
    reduce(money) {
        this.allDatas.totalMoney -= money
    }

    // checkbox true
    @action
    checkTrue(money) {
        this.allDatas.totalMoney += money
    }  

    // checkbox false
    @action
    checkFalse(money) {
        if(this.allDatas.totalMoney <=0 )
        return 
        this.allDatas.totalMoney -= money
    }

    // 全选
    @action
    allSelect() {
        if(this.allDatas.isAllSelected){
            // 重置totalMoney
            this.allDatas.totalMoney = 0
            this.allDatas.data.forEach(e=> {
                this.allDatas.totalMoney += e.count * e.price 
            })
        }else {
            this.allDatas.totalMoney = 0
        }
    }

    // check全选
    @action 
    check() {
        // 所有checkbox为true时全选才为true
        let allTrue = this.allDatas.data.every(v => (
            v.isSelected === true
        ))
        // console.error(this.allDatas.data)
        if(allTrue) {
            this.allDatas.isAllSelected  = true
        }else {
            this.allDatas.isAllSelected = false
        }
    }

    // 删
    @action
    delect(name) {
        this.allDatas.data = this.allDatas.data.filter (e => (
            e.name !== name
        ))
    }

    // 总价格
    @computed get totalMoney() {
        let money = 0;
        let arr =  this.allDatas.data.filter(e => (
            e.isSelected === true
        ))
        arr.forEach(e=> (
            money += e.price * e.count
        ))
        // this.allDatas.data.forEach(e=> {
        //     if(e.isSelected) {
        //         money += (e.price * e.count)
        //     }
        // })
        return money
    }
    
}

// 返回RootStore实例 
 export default new RootStore()