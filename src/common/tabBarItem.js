import React, { component, Component } from 'react';
import { Image } from 'react-native';

const TabBarItem = ({focused, tintColor, selectedImage, normalImage}) => {
    return (
        <Image
            source = {focused ? selectedImage : normalImage}
            style={{ tintColor: tintColor, width: 25, height: 25 }}
        />
    )
}
export default TabBarItem;

