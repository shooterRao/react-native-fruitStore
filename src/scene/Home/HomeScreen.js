
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import ViewPager from '../../common/viewpager/ViewPager'
import { inject, observer } from 'mobx-react/native';

import theme from '../../common/color'
import { width } from '../../common/screen'
import ThemeLine from './ThemeLine'
import NewGoodsView from './NewGoodsView'

// 引入打乱数组函数
import Disturb from '../../common/disturbArray'

// 轮播图片
const ImageSources = [
    require('../../img/i1.png'),
    require('../../img/i2.png'),
    require('../../img/i3.png')
]

@inject('rootStore')
@observer
export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '迷你水果商城',
        headerTitleStyle: {alignSelf: 'center', fontSize: 15, color: theme.fontColor},
        headerStyle: {height: 38, backgroundColor: theme.color}
};

    constructor(props) {
        super(props);
        let dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1,p2) => p1 != p2
        })
        this.state = {
            dataSource: dataSource.cloneWithPages(ImageSources)
        }
    }
    
    _renderPage(data) {
        return (
            <Image source={data} style={styles.image}/>
        )
    }

    render() {
        console.log(this.props.rootStore.NewGoodsStore)
        // 打乱数组
        let data = Disturb(this.props.rootStore.NewGoodsStore.allDatas.data)
        return (
        <ScrollView style={styles.container}>
        <View style={styles.swiper}> 
        <ViewPager
             style = {{height: 200}}
             dataSource={this.state.dataSource}
             renderPage={this._renderPage}
             isLoop={false}
             autoPlay={true}
            />
        </View>
        <ThemeLine name={'最近新品'}/>
        <NewGoodsView itemDatas={data} navigation={this.props.navigation}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
      },
    swiper: {
        width: width,
        height: 200
    },
    image: {
        width: width,
        height: 200,
        resizeMode: 'stretch' 
    },
    line: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

