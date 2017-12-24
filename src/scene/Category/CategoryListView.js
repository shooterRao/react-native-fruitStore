import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import ThemeLine from '../Home/ThemeLine'
import NewGoodsView from '../Home/NewGoodsView'
import Disturb from '../../common/disturbArray'

@observer
export default class CategoryListView extends Component {
    constructor(props){
        super(props)
        this.itemDatas = this.props.itemDatas
        this.state = {
            isRefreshing: false,
           // itemDatas: itemDatas
        }
    }

    _onRefresh() {
        this.setState({
            isRefreshing: true
        })
        // 每次都加多组数据上去,再打乱
        // 用slice方法的原因主要是把mobx储存的数组转为真正的数组，mobx存储的数组不是纯数组
        // Array.from也可以
        // this.itemDatas = Disturb(this.itemDatas.concat(Array.from(this.props.itemDatas)))
        this.itemDatas =  Disturb(this.itemDatas.concat(this.props.itemDatas.slice()))
        setTimeout(()=> {
            this.setState({
                isRefreshing: false,
              //  itemDatas: newDatas
            })          
        },1000)
    }

    render() {
       
        return (
            <ScrollView 
             refreshControl={
                <RefreshControl
                 refreshing={this.state.isRefreshing}
                 onRefresh={this._onRefresh.bind(this)}
                 tintColor="#000000"
                 title="loading"
                 colors={['#000000']}
                 progressBackgroundColor="#ffffff"
                 enabled={true}
                />
             }
             style={styles.container}>
            <ThemeLine name={'当季热销'}/>
            <NewGoodsView  itemDatas={this.itemDatas} navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      flexDirection: 'column'
    },

});

