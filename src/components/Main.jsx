import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgroundColor.mainComponent,
  },
});

const Main = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;