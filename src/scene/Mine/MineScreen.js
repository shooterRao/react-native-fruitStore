import React from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';

const RefreshCon = (
  <RefreshControl
    refreshing={false}
    tintColor="#000000"
    title="loading"
    colors={['#000000']}
    progressBackgroundColor="#ffffff"
    enabled
  />
);

const MineScreen = ({ navigation }) => (
  <ScrollView
    style={styles.container}
    refreshControl={RefreshCon}>
    <Header />
    <Order navigation={navigation} style={styles.order} />
  </ScrollView>
);

MineScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  order: {
    marginTop: 10
  }
});

export default MineScreen;
