import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';

import PropTypes from 'prop-types';

import theme from '../../common/theme';
import { width, height } from '../../common/screen';
import CartList from './CartList';
import CartCheckout from './CartCheckOut';

@inject('rootStore')
@observer
export default class CartScreen extends Component {
  // 解决安卓机标题偏右问题
  static navigationOptions = {
    headerRight: <View />
  };

  @computed get dataSource() {
    const { rootStore } = this.props;
    const { CartStore } = rootStore;
    return CartStore.foodList;
  }

  renderItem = ({ item }) => {
    const { rootStore } = this.props;
    const { CartStore } = rootStore;
    return (
      // 传入CartStore实例
      <CartList data={item} CartStore={CartStore} />
    );
  };

  keyExtractor = item => item.name;

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {this.dataSource.length ? (
          <View style={{ flex: 1 }}>
            <View style={{ height: height - 38 - 50 - 65 }}>
              <FlatList
                // fixed https://github.com/shooterRao/react-native-fruitStore/issues/7
                data={this.dataSource.slice()}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
              />
            </View>

            {/* 结账View */}
            <CartCheckout navigation={navigation} />
          </View>
        ) : (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>购物车是空的哦~请到首页或者分类页添加哈๑乛◡乛๑</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

CartScreen.wrappedComponent.propTypes = {
  rootStore: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  lastView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width,
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
