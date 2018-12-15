import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import theme from '../../common/theme';

const List = ({ message }) => (
  <View style={{ flex: 1 }}>
    <Text>{message}</Text>
  </View>
);

List.propTypes = {
  message: PropTypes.string.isRequired
};

const MessageView = () => (
  <ScrollableTabView
    style={{ flex: 1, height: 300 }}
    tabBarBackgroundColor="white"
    tabBarActiveTextColor={theme.color}
    tabBarTextStyle={{ fontSize: 14, marginTop: 13 }}
    tabBarUnderlineStyle={{ backgroundColor: theme.color }}
    initialPage={0}>
    {['商品详情', '产品参数', '售后保障'].map(v => (
      <List tabLabel={v} message={v} key={v} />
    ))}
  </ScrollableTabView>
);

export default MessageView;
