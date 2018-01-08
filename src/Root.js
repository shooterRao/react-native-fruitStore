import React  from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';  
import HomeScreen from './scene/Home/HomeScreen'
import CategoryScreen from './scene/Category/CategoryScreen'
import CartScreen from './scene/Cart/CartScreen'
import MineScreen from './scene/Mine/MineScreen'
import ItemDetail from './scene/ItemDetail/ItemDetail'
import OrderScreen from './scene/Order/OrderScreen'

// import ShoppingCar from './shoppingCar/App'
import TabBarItem from './common/tabBarItem'
import theme from './common/color'

// 全局注册并注入mobx，首页新品，分类页，商品详情页，购物车页面都要用到store
import {Provider} from 'mobx-react'
// 获取store实例
import store from './mobx/store'

const  Navigation = () => {
    return (
      <Provider rootStore={store}>
        <Navigator/>
      </Provider>
       
    );
}

// TabNavigator
const Tab = TabNavigator(
  {
  Home:{
     screen:HomeScreen,
     navigationOptions:({navigation})=>(
       {
         tabBarLabel:'主页',
         tabBarIcon: ({focused, tintColor }) => 
         (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage = {require('./img/homeSelect.png')}
            normalImage = {require('./img/home.png')}
          />
    )
       }
     )
  },

  Category:{
      screen:CategoryScreen,
      navigationOptions:({navigation})=>(
        {
          tabBarLabel:'分类',
          tabBarIcon: ({focused, tintColor }) => (
            <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage = {require('./img/categorySelect.png')}
            normalImage = {require('./img/category.png')}
          />
    )
       }
     )
  },
    Cart:{
      screen:CartScreen, 
      navigationOptions:({navigation})=>(
        {
          tabBarLabel:'购物车',
           tabBarIcon: ({focused, tintColor }) => (
            <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage = {require('./img/cartSelect.png')}
            normalImage = {require('./img/cart.png')}
            />
     )
        }
      )
 },
    
    Mine: {
        screen: MineScreen,
        navigationOptions:({navigation})=>(
          {
            tabBarLabel:'我的',
            tabBarIcon: ({focused, tintColor }) => (
            <TabBarItem
              tintColor={tintColor}
              focused={focused}
              selectedImage = {require('./img/mineSelect.png')}
              normalImage = {require('./img/mine.png')}
              />
          )
        }
      )
  }
},
  
  // tabScreen配置
  {
      tabBarComponent:TabBarBottom, // 自定义  
      tabBarPosition:'bottom',  
      swipeEnabled:false,  
      animationEnabled:true,  
      lazy:true,  
      tabBarOptions:{  
        activeTintColor: theme.color,  
        inactiveTintColor:'#979797',        
        labelStyle: {  
            fontSize: 12, // 文字大小  
          },  
      }  
        
  }
  

)

const Navigator = StackNavigator(  
    
  {  
    Tab:{screen: Tab},
    ItemDetail:{screen: ItemDetail},
    Cart:{screen: CartScreen},
    OrderScreen: {screen: OrderScreen}
  },  
  
  {  
    navigationOptions:{  
     // 开启动画 
     animationEnabled:true, 
     // 开启边缘触摸返回
     gesturesEnabled:true
    },  
    mode:'card', 
    transitionConfig:()=>({  
    // 统一安卓和苹果页面跳转的动画
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,  
    })  
  });  

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default Navigation;
