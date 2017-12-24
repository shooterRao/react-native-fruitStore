import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { observer } from 'mobx-react';
import { action } from 'mobx';

@observer
export default class CartList extends Component {
    constructor(props){
        super(props)
        // 一个是数据
        this.data = this.props.data
        // 不应该在本地缓存mobx，注释
       // this.mobx = this.props.mobx
    }

    // checkbox-onPress
    @action
    checkBoxSelect () {
        this.data.isSelected = !this.data.isSelected
        // totalMoney要跟着变化
        if(this.data.isSelected) {
            this.props.mobx.checkTrue(this.data.count * this.data.price)
        }else {
            this.props.mobx.checkFalse(this.data.count * this.data.price)
        }
        // 检测
        this.props.mobx.check()
    }

    // + onPress
    @action
    addCount() {
        this.data.count++
        let money = this.data.price
        if(this.data.isSelected)
        this.props.mobx.add(money)
    }

    // - onPress
    @action
    reduceCount() {
        if(this.data.count == 0 )
        return
        this.data.count--
        let money = this.data.price
        if(this.data.isSelected)
        this.props.mobx.reduce(money)
    }   
    
    // 删除,根据name字段删除
    @action
    delect(name) {

        this.props.mobx.delect(name)

    }
    
    render() {

        let {name,price,count,image,isSelected} = this.data;
       
        return (
            <View style={styles.container}>
            <TouchableOpacity
                    style={{ marginLeft : 12 }}
                    onPress={()=>this.checkBoxSelect()}
                    >
                    <Image source={ isSelected ?
                        require('../../img/radio_selected.png')
                        : require('../../img/radio_normall.png') }
                        style={{width: 20,height: 20}}
                        />
                </TouchableOpacity>
            <Image source={image} style={styles.image}/>
            <View style={styles.rightView}>
            <View style={styles.topView}>
                <Text style={[styles.text,{flex: 1,textAlign:'center'}]}>{name}</Text>
                <Text style={[styles.text,{flex: 1,textAlign:'center'}]}>￥ {price}/500g</Text>
            </View>

            <View style={styles.bottomView}>

                <TouchableOpacity 
                    style={{paddingLeft: 10,paddingRight: 30}}
                    onPress={()=>this.reduceCount()}
                    >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{count}</Text>
                <TouchableOpacity 
                    style={{paddingLeft: 30,paddingRight: 10}}
                    onPress={()=>this.addCount()}    
                    >
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 45}} onPress={()=>this.delect(name)}>
                    <Text style={styles.text}>删</Text>
                </TouchableOpacity>
            </View>

            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        height: 100,
        width: 100,
        marginLeft: 18,
        marginRight: 10
    },
    rightView: {
        flex: 1,
        height: 100,
        // justifyContent: 'space-between'
    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },
    text: {
        color: '#000',
        fontSize: 15
    },
    bottomView: {
        flexDirection: 'row',
    },
    button: {
        paddingLeft: 30,
        paddingRight: 30
    }
})
