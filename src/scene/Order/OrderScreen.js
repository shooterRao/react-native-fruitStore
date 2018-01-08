import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import { observer, inject } from 'mobx-react'
import { action, computed } from 'mobx'

import theme from '../../common/color'
import OrderList from './OrderList'

@inject('rootStore')
@observer
export default class OrderScreen extends Component {
    static navigationOptions = {
        title: '订单列表',
        headerTitleStyle: { fontSize: 15, color: theme.fontColor},
        headerStyle: {height: 38, backgroundColor: theme.color}
    }

    constructor(props) {
        super(props)
        console.log(this.props.rootStore.OrderStore.allDatas)
        this.state = {
            dataSource : this.props.rootStore.OrderStore.allDatas
        }
    }

    _renderItem = ({item}) => {
        return (
            <OrderList item={item}/>
        )
    }

    _keyExtractor = (item, index)=> {
        return item.date
      }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})