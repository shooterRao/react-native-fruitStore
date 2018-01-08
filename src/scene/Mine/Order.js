import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import theme from '../../common/color'
import Line from './Line'

const subList = [
    {
        title: '待付款',
        image: require('../../img/sale.png')
    },
    {
        title: '待发货',
        image: require('../../img/need.png')
    },
    {
        title: '待收货',
        image: require('../../img/pay.png')
    },
    {
        title: '待评价',
        image: require('../../img/review.png')
    }]

const Order = (props) => {
    return (
        <View style={[styles.container,props.style]}>
            {/* 
                感觉这个不好看...想加功能可以把注释去掉
            <View style={styles.wrapper}>
            {
                subList.map((value, index)=> (
                    <View key={index} style={{flexDirection: 'column',alignItems:'center'}}>
                    <TouchableOpacity>
                        <Image source={value.image} style={styles.img}/>
                        <Text style={{textAlign: 'center'}}>{value.title}</Text>
                    </TouchableOpacity> 
                    </View>
                ))
            }
            </View> */}
            <Line onPress={()=> goOrderScreen(props)} title={'我的订单'} subtitle={'查看详情'}/>
            <Line title={'我的收货地址'} subtitle={'查看'}/>
            <Line title={'我的收藏'} subtitle={'♥'}/>
            <Line title={'我的评价'} subtitle={'☀'}/>
            <Line title={'会员中心'} subtitle={'☺'}/> 
            <Line title={'优惠卷'} subtitle={'✉'}/>
            <Line title={'联系我们'} subtitle={'☎'}/>
            <Line title={'关于'} subtitle={'版本: 1.0'}/>

        </View>
    )
}

const goOrderScreen = (props) => {
    props.navigation.navigate('OrderScreen',{})
}
 
const styles = {
    container: {
        flexDirection: 'column'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
    img: {
        height: 40,
        width: 40
    }
}

export default Order;