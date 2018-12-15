import React from 'react';
import { View, StyleSheet } from 'react-native';
import Line from './Line';

// const subList = [
//   {
//     title: '待付款',
//     image: require('../../img/sale.png')
//   },
//   {
//     title: '待发货',
//     image: require('../../img/need.png')
//   },
//   {
//     title: '待收货',
//     image: require('../../img/pay.png')
//   },
//   {
//     title: '待评价',
//     image: require('../../img/review.png')
//   }
// ];

const Order = props => (
  /* eslint-disable-next-line */
  <View style={[styles.container, props.style]}>
    <Line
      onPress={() => goOrderScreen(props)}
      title="我的订单"
      subtitle="查看详情"
    />
    <Line title="我的收货地址" subtitle="查看" />
    <Line title="我的收藏" subtitle="♥" />
    <Line title="我的评价" subtitle="☀" />
    <Line title="会员中心" subtitle="☺" />
    <Line title="优惠卷" subtitle="✉" />
    <Line title="联系我们" subtitle="☎" />
    <Line title="关于" subtitle="版本: 2.0" />
  </View>
);

const goOrderScreen = props => {
  props.navigation.navigate('OrderScreen');
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  img: {
    height: 40,
    width: 40
  }
});

export default Order;
