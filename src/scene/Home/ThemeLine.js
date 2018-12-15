import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../common/theme';

const ThemeLine = ({ name, textStyle, lineStyle }) => (
  <View style={[styles.lineStyle, lineStyle]}>
    <Text style={[styles.textStyle, textStyle]}>{name}</Text>
  </View>
);

ThemeLine.defaultProps = {
  textStyle: '',
  lineStyle: ''
};

ThemeLine.propTypes = {
  name: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  lineStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

const styles = StyleSheet.create({
  lineStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: theme.color
  }
});

export default ThemeLine;
