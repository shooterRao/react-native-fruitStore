import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { width } from '../../common/screen'

const NewGoodsItem = ({name, price, image, onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}>
        <View style={styles.item}>
            <Image source={image} style={styles.image}/>
            <Text>{name}</Text>
            <Text>￥ {price}/500g</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        width: (width - 40)/2,
        height: 150,
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        backgroundColor: '#f5f6f5',
        borderRadius: 20
    },
    image: {
        width: 100,
        height: 100
    }
})

export default NewGoodsItem;