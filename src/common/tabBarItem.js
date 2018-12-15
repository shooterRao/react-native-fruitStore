import React from 'react';
import propTypes from 'prop-types';
import { Image } from 'react-native';

const TabBarItem = ({ focused, tintColor, selectedImage, normalImage }) => (
  <Image
    source={focused ? selectedImage : normalImage}
    style={{ tintColor, width: 25, height: 25, alignItems: 'center' }}
  />
);

TabBarItem.propTypes = {
  focused: propTypes.bool.isRequired,
  tintColor: propTypes.string.isRequired,
  selectedImage: propTypes.number.isRequired,
  normalImage: propTypes.number.isRequired
};

export default TabBarItem;
