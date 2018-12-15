# React-Native+Mobx开发一个简单的水果商城App

## 2018-12-15 更新

最近抽空把这项目的核心依赖全部升级了，具体更新如下:

- react-native(0.57.7)
- react-navigation(3.0.7)
- mobX(5.7.0)
- mobX-react(5.4.2)
- 引入eslint、prettier
- iphonexs等比较新的设备的支持
- 根据react-navigation新的api重写路由
- 优化购物车mobX状态管理逻辑

[旧版地址](https://github.com/shooterRao/react-native-fruitStore/tree/v1.0)

> 如果您对此项目感兴趣，可以点**Star**支持下，非常感谢！(๑•̀ㅂ•́)و✧

> [技术博客](https://juejin.im/post/5a3f06cd6fb9a044fe4693bc)

# 项目运行

```
git clone https://github.com/shooterRao/react-native-fruitStore.git 或者直接下载

cd react-native-fruitStore

yarn

android: react-native run-android
ios: react-native run-ios
```

# 实现功能

* 商品预览
* 加入购物车
* 商品的增删查改
* 模拟支付
* 清空购物车，还原商品初始状态
* 模拟下拉加载
* 页面的跳转和传值
* 查看订单列表(2018/1/8 增加)

# 效果演示

## 设备支持

![show](https://github.com/shooterRao/react-native-fruitStore/blob/master/screenshots/show.png)

## 总体效果

![begin](https://github.com/shooterRao/react-native-fruitStore/blob/master/screenshots/begin.gif)

## 操作商品效果

![state](https://github.com/shooterRao/react-native-fruitStore/blob/master/screenshots/state.gif)

## 购物流程效果

![buy](https://github.com/shooterRao/react-native-fruitStore/blob/master/screenshots/buy.gif)


# 参考文档

[mobX文档](http://cn.mobx.js.org/)
[react-navigation](https://reactnavigation.org/zh-Hans/)
UI参考于这款微信小程序[wxapp-mall](https://github.com/lin-xin/wxapp-mall)

