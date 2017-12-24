
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from 'react-native';


import { observer, inject } from 'mobx-react'
import { action, autorun, computed } from 'mobx'

import theme from '../../common/color'
import { width,height } from '../../common/screen'
import CartList from './CartList'
import Checkout from './CartCheckOut'

// 获取数据
//import cartDatas from './CartJson'


@inject('rootStore')
@observer
export default class CartScreen extends Component {
  
  static navigationOptions = ({navigation,screenProps}) => (
  navigation.state.params && navigation.state.params.headerStyle ? 
    {
      title: '购物车',
      headerTitleStyle: navigation.state.params.headerStyle,
      headerStyle: styles.headerStyle,
     } :
     {
     title: '购物车',
     headerTitleStyle: styles.headerTitleStyle,
     headerStyle: styles.headerStyle,
    }
   );

   constructor(props){
    super(props)
    
    // console.log(this.props.rootStore.CartStore);
    // 获取购物车mobx数据实例
    // this.mobx = this.props.rootStore.CartStore
  }



  @computed get dataSource() {
    return this.props.rootStore.CartStore.allDatas.data.slice();
  }

  _renderItem = ({item}) => {
    
    return(
      // 传入CartStore实例
      <CartList data={item} mobx={this.props.rootStore.CartStore}/>
    )
  }

  _keyExtractor = (item,index)=> {
    // 千万别用index，不然在删购物车数据时，如果从第一个item开始删会产生节点渲染错乱的bug
    return item.name
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.dataSource.length ? 
        <View style={{flex: 1}}>
        <View style={{height: height - 38 - 50 - 65}}>
        <FlatList
          data={this.dataSource}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          /> 
        </View>
          
        {/* 结账View,传入navigation，mobx实例 */}
        <Checkout mobx={this.props.rootStore} navigation={this.props.navigation}/>
        </View>
        :
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Text>购物车是空的哦~请到首页或者分类页添加哈๑乛◡乛๑</Text>
      </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  lastView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: theme.color
  },
  headerTitleStyle: {
    alignSelf: 'center', 
    fontSize: 15, 
    color: theme.fontColor
  },
  headerStyle: {
    height: 38, 
    backgroundColor: theme.color
  }
});

