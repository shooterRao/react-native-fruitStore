
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl 
} from 'react-native';
import theme from '../../common/color'
import Header from './Header'
import Order from './Order'
export default class MineScreen extends Component {

  static navigationOptions = {
        title: '我的',
        headerTitleStyle: {alignSelf: 'center', fontSize: 15, color: theme.fontColor},
        headerStyle: {height: 38, backgroundColor: theme.color}
  };

  render() {
    return (
      <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={false}
         tintColor="#000000"
         title="loading"
         colors={['#000000']}
         progressBackgroundColor="#ffffff"
         enabled={true}/>}
      >
        <Header />
        <Order navigation={this.props.navigation} style={styles.order}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  order: {
    marginTop: 10
  }
});

