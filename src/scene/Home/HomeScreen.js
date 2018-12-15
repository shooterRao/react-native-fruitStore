import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { width } from '../../common/screen';
import ThemeLine from './ThemeLine';
import NewGoodsView from './NewGoodsView';
import HomeSwiper from './HomeSwiper';

// 引入mock数据
import newGoodsData from '../../mock/newGoods';

// 引入打乱数组函数
import Disturb from '../../common/disturbArray';

// 轮播图片
const imageSources = [
  require('../../img/i1.png'),
  require('../../img/i2.png'),
  require('../../img/i3.png')
];

const HomeScreen = ({ navigation }) => {
  // 打乱数组
  const data = Disturb(newGoodsData.data);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiper}>
        <HomeSwiper imageSources={imageSources} />
      </View>
      <ThemeLine name="最近新品" />
      <NewGoodsView itemDatas={data} navigation={navigation} />
    </ScrollView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  swiper: {
    width,
    height: 200
  },
  image: {
    width,
    height: 200,
    resizeMode: 'stretch'
  },
  line: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
