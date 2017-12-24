
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import theme from '../../common/color'
import ThemeLine from '../Home/ThemeLine'
import NewGoodsView from '../Home/NewGoodsView'
import CategoryListView from './CategoryListView'


import { inject, observer } from 'mobx-react/native';

@inject('rootStore')
@observer
export default class CategoryScreen extends Component {

  static navigationOptions = {
    title: '分类',
    headerTitleStyle: {alignSelf: 'center', fontSize: 15, color: theme.fontColor},
    headerStyle: {height: 38, backgroundColor: theme.color}  
  };

  render() {
    
    // 获取mobx上分类的数据
   // let data = categoryDatas.data;
   let data = this.props.rootStore.categoryGoodsStore.allDatas.data
    return (
    
      <ScrollableTabView
        style={styles.container}
        tabBarBackgroundColor='white'
        tabBarActiveTextColor={theme.color}
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        initialPage={0}
      >
      {
        data.map((value,index)=>(
          <CategoryListView
            tabLabel={value.title}
            key={index}
            itemDatas={value.detail}  
            navigation={this.props.navigation}/>
        ))
      }
        
      </ScrollableTabView>
      
    );
  }
}

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
},
});

