import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.backgroundColor.appBar,
    },
    text: {
        color: theme.colors.textAppBar,
    }
});

const Tab = (props) => {
    return (
        <Pressable onPress={() => Alert.alert('you pressed vladimir!')}>
            <Text style={{ paddingBottom: 40, paddingTop: 40, paddingLeft: 140}} color="textAppBar">{props.name}</Text>
        </Pressable>
    );
};

const AppBar = () => {
    return (
    <View style={styles.container}>
        { Tab({ name: 'Repositories' }) }
    </View>
    );
};

export default AppBar;