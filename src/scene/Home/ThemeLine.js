import React from 'react'
import {View, Text} from 'react-native'
import theme from '../../common/color'

export default ({name,textStyle,lineStyle}) => {
    return (
        <View style={[styles.lineStyle,lineStyle]}>
            <Text style={[styles.textStyle,textStyle]}>{name}</Text>
        </View>
    )
}

const styles = {
    lineStyle: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: theme.color
    }
}