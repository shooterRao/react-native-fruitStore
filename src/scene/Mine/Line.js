import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import theme from '../../common/color'

const Line =  ({title, subtitle, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={()=> onPress && onPress() } style={styles.touch}>
                <Text>{subtitle}</Text>
                <Image source={require('../../img/cell_arrow.png')} style={styles.img}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        marginLeft: 10
    },
    touch: {
        flexDirection: 'row'
    },
    img: {
        width: 14,
        height: 14,
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 5
    }
}

export default Line