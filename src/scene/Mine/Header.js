import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import theme from '../../common/color'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{alignSelf:'center'}}>
            <Image source={require('../../img/smile.png')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.text}>Hello! 小吃货(　＾∀＾)</Text>
        </View>
    )
} 

const styles = {
    container: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: theme.color
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 15,
        marginRight: 8
    },
    text: {
        fontSize: 15,
        alignSelf: 'center',
        color: '#000000'
    }
}

export default Header