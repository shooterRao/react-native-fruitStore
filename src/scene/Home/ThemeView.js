import React from 'react'
import {View, Text, Image, TouchableOpacity,Dimensions} from 'react-native'
import { width } from '../../common/screen'


const ThemeView = ({props}) => (
    <View style={styles.themeView}>
        <Image source={require('../../img/s3.png')} style={styles.topImage}/>
    <View style={styles.bottomView}>
        <Image source={require('../../img/s1.png')} style={styles.bottomImage}/>    
        <Image source={require('../../img/s2.png')} style={styles.bottomImage}/>
    </View>
    </View>
)
    
const styles = {
    themeView: {
        flex: 1,
        flexDirection: 'column'
    },
    topImage: {
        width: width-20,
        height: 180,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    bottomView: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 2
    },
    bottomImage: {
        width: (width-20)/2,
        height: 150,
        resizeMode: 'stretch',
    }
}

export default ThemeView;