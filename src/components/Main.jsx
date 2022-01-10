import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native'

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
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
      <Switch>
      <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;