import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import NewGoodsItem from './NewGoodsItem'
import {width} from '../../common/screen'

const NewGoodsView = (props) => {
    let items = null;
    if(props.itemDatas)
    items = props.itemDatas;
    // console.log(props.itemDatas)
    return (
        <View style={styles.container}>
        {
            items.map((value, index)=> {
                return (
                    <NewGoodsItem onPress={()=> props.navigation.navigate('ItemDetail',{value})}
                     name={value.name} price={value.price} image={value.image} key={index}/>
                )
            }) 
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: (width - 40)/2,
        height: 150,
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: '#f5f6f5',
        borderRadius: 20
    },
    image: {
        width: 100,
        height: 100
    }
})

export default NewGoodsView;