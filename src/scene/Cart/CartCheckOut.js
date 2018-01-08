
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'

import { observer } from 'mobx-react'
import { action, autorun, computed } from 'mobx'
import Spinner from 'react-native-loading-spinner-overlay'
import Toast, {DURATION} from 'react-native-easy-toast'
import theme from '../../common/color'
import { width } from '../../common/screen'

@observer
export default class CheckOut extends Component {
    constructor(props){
    super(props) 
        
        // 根据mobx文档，不应该在本地缓存mobx
        // this.mobx = this.props.mobx
        this.state = {
            visible: false,
            loadText: '正在支付...'
        }
    }

    
    _allSelect() {
        this.props.mobx.CartStore.allDatas.isAllSelected = !this.props.mobx.CartStore.allDatas.isAllSelected 
        if(this.props.mobx.CartStore.allDatas.isAllSelected) {
            this.props.mobx.CartStore.allDatas.data.forEach(e=> {
                e.isSelected = true
            })
        }else {
            this.props.mobx.CartStore.allDatas.data.forEach(e=> {
                e.isSelected = false
            })
        }
        // 更新totalMoney
        this.props.mobx.CartStore.allSelect()
    }

    // 付款
    pay() {
        Alert.alert(
            '您好',
            `总计:￥ ${this.props.mobx.CartStore.totalMoney}`,
            [
              {text: '确认支付', onPress: () => this.clear()},
              {text: '下次再买', onPress: () => null}
            ],
            { cancelable: false }
          )
    }

    // 清空购物车
    clear() {
      this.setState({
        visible: !this.state.visible
      })
      setTimeout(()=>{
        this.setState({
            loadText: '支付成功!欢迎下次光临!'
          })
          setTimeout(()=> {
            this.setState({
                visible: false
              },()=>{
                // 把数据加入到订单页面中
                // 先拷贝一份数据，必须是独立的，脱离Mobx控制的
                let orderData = {};
                orderData.date = new Date()
                orderData.totalMoney = this.props.mobx.CartStore.totalMoney;
                orderData.data = [];
                this.props.mobx.CartStore.allDatas.data.forEach(e => orderData.data.push(Object.assign({},e)))
                this.props.mobx.OrderStore.allDatas.push(orderData)
                // 清空购物车
                this.props.mobx.CartStore.allDatas.data = []
                // 把所有商品count都变为0
                this.props.mobx.NewGoodsStore.allDatas.data.forEach(e=> e.count = 0)
                this.props.mobx.categoryGoodsStore.allDatas.data.forEach(e=>{
                    e.detail.forEach(value => {
                        value.count = 0
                    })
                })
              })
          },1500)
      },2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this._allSelect()}>
                    <Image
                        source={
                            this.props.mobx.CartStore.allDatas.isAllSelected ? 
                            require('../../img/radio_selected.png') :
                            require('../../img/radio_normall.png')
                        }
                        style={styles.image} />
                </TouchableOpacity>

                <View style={styles.right}>
                    <Text style={{ flex: 1, marginLeft: 5, fontSize: 16 }}>全选</Text>
                    <Text style={{ fontSize: 22, color: '#000' }}>￥ {this.props.mobx.CartStore.totalMoney}</Text>
                </View>

                <TouchableOpacity 
                    style={{ paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}
                    onPress={()=>this.pay()}    
                    >
                    <Text style={{ fontSize: 16 }}>付款</Text>
                </TouchableOpacity>
                <Spinner visible={this.state.visible} textContent={this.state.loadText} textStyle={{fontSize: 15,color: '#FFF'}} />
                <Toast ref="toast"  
                positionValue={200}
                fadeInDuration={650}
                fadeOutDuration={600}
                opacity={0.8}/>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: theme.color
      },
      image: {
        width: 30,
        height: 30, 
        marginLeft: 10
      },
      right: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center'
      }
})