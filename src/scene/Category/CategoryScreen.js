import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types';
import theme from '../../common/theme';
import CategoryListView from './CategoryListView';

import catetgoryGoodsData from '../../mock/catetgoryGoods';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 13
  },
  tabBarUnderline: {
    backgroundColor: theme.color
  }
});

export default class CategoryScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    title: '分类',
    headerTitleStyle: {
      alignSelf: 'center',
      fontSize: 15,
      color: theme.fontColor
    },
    headerStyle: { height: 38, backgroundColor: theme.color }
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarBackgroundColor="white"
        tabBarActiveTextColor={theme.color}
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        initialPage={0}>
        {catetgoryGoodsData.map(value => (
          <CategoryListView
            tabLabel={value.title}
            key={value.title}
            itemDatas={value.detail}
            navigation={navigation}
          />
        ))}
      </ScrollableTabView>
    );
  }
}
