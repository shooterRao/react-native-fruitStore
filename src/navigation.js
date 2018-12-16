import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import HomeScreen from './scene/Home/HomeScreen';
import CategoryScreen from './scene/Category/CategoryScreen';
import CartScreen from './scene/Cart/CartScreen';
import MineScreen from './scene/Mine/MineScreen';
import ItemDetail from './scene/ItemDetail/ItemDetail';
import OrderScreen from './scene/Order/OrderScreen';

import TabBarItem from './common/tabBarItem';
import theme from './common/theme';

const routeOptMap = {
  Home: {
    headerTitle: '迷你水果商城',
    selectedImage: require('./img/homeSelect.png'),
    normalImage: require('./img/home.png'),
    tabBarLabel: '主页'
  },
  Category: {
    headerTitle: '分类',
    selectedImage: require('./img/categorySelect.png'),
    normalImage: require('./img/category.png'),
    tabBarLabel: '分类'
  },
  Cart: {
    headerTitle: '购物车',
    selectedImage: require('./img/cartSelect.png'),
    normalImage: require('./img/cart.png'),
    tabBarLabel: '购物车'
  },
  Mine: {
    headerTitle: '我的信息',
    selectedImage: require('./img/mineSelect.png'),
    normalImage: require('./img/mine.png'),
    tabBarLabel: '我的'
  },
  ItemDetail: {
    headerTitle: '商品信息'
  },
  OrderScreen: {
    headerTitle: '订单列表'
  },
  CartScreen: {
    headerTitle: '购物车'
  }
};

// 默认header配置
const defaultHeaderOpts = {
  headerTitleStyle: {
    flex: 1, // 解决安卓机title不居中
    textAlign: 'center', // 解决安卓机title不居中
    fontSize: 15,
    color: theme.fontColor
  },
  headerStyle: {
    height: 38,
    backgroundColor: theme.color
  }
};

const HeaderBackImage = () => (
  <Image
    style={{ marginLeft: 2, width: 25, height: 25 }}
    source={require('./img/arrow.png')}
  />
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    Cart: CartScreen,
    Mine: MineScreen
  },
  {
    // tabBar配置统一在这里配置
    // 不需要到每个页面中进行配置了
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        tabBarLabel: routeOptMap[routeName].tabBarLabel,
        /* eslint-disable-next-line */
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage={routeOptMap[routeName].selectedImage}
            normalImage={routeOptMap[routeName].normalImage}
          />
        )
      };
    },
    tabBarOptions: {
      activeTintColor: theme.color,
      inactiveTintColor: '#979797',
      labelStyle: {
        fontSize: 12 // 文字大小
      }
    }
  }
);

// header相关配置需要在这里写
TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  return {
    ...defaultHeaderOpts,
    headerTitle: routeOptMap[routeName].headerTitle
  };
};

const AppNavigator = createStackNavigator(
  {
    Tab: TabNavigator,
    ItemDetail,
    CartScreen,
    OrderScreen
  },
  {
    initialRouteName: 'Tab',
    mode: 'card',
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        ...defaultHeaderOpts,
        gesturesEnabled: true,
        headerBackTitle: null,
        headerTitle:
          routeOptMap[routeName] && routeOptMap[routeName].headerTitle,
        headerBackImage: HeaderBackImage
      };
    },
    transitionConfig: () => ({
      // 统一安卓和苹果页面跳转的动画
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
