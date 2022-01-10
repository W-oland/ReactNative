import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.backgroundColor.appBar,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.colors.textAppBar,
    }
});

const Tab = (props) => {
    //Alert.alert('you pressed vladimir!')}
    return (
        <Link to={props.link}>
            <Text style={{ paddingBottom: 40, paddingTop: 40, paddingLeft: 40, paddingRight: 40}} color="textAppBar">{props.name}</Text>
            {/*<Pressable onPress={() => console.log(props?.message)}>
                <Text style={{ paddingBottom: 40, paddingTop: 40, paddingLeft: 40, paddingRight: 40}} color="textAppBar">{props.name}</Text>
            </Pressable>*/}
        </Link>
    );
};

const AppBar = () => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
            { Tab({ name: 'Sign-in', link:"/signin", message:'signin call' }) }
            { Tab({ name: 'Repositories', link:"/", message: 'repositories call' }) }
        </ScrollView>
    </View>
    );
};

export default AppBar;