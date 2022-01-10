import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    flexItemA: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 15,
        width: 260,   
    },
    countItem: {
        flexGrow: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    /*flexContainer: {
        display: 'flex',
        padding: 10,
        backgroundColor: theme.backgroundColor.repositoryItem,
    },
    flexItemA: {
        //display: 'flex',
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 15

    },
    languageBox : {
        backgroundColor: theme.backgroundColor.languageTag,
        color: theme.colors.textAppBar,
        width: 100,
    },*/
});

const NumberItem = ({ label, count }) => {
    return (
        <View style={styles.countItem} >
            <Text style={{ marginBottom: 5 }} fontWeight="bold" > { (count) >= 1000 ? (count/1000).toFixed(1) + 'k' : count }</Text>
            <Text color="textSecondary" > {label} </Text>
        </View>
    )
}

const Item = ({ item }) => {
    return (
        <>
        <View style={styles.flexContainer}>
            <Image style={{ width: 80, height: 80 }} source={{uri: item.ownerAvatarUrl}}/>
            <View style={styles.flexItemA}>
                <Text fontWeight="bold">{item.fullName}</Text>
                <Text>{item.description}</Text>
                <Text>{item.language}</Text>
                <View style={{ marginTop: 5, flexDirection:'row'}}>
                    <Text style={{ borderRadius: 5, backgroundColor: theme.backgroundColor.languageTag, color: theme.colors.textAppBar }}> {item.language} </Text>
                </View>
            </View>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <NumberItem count={item.stargazersCount} label="Stars"/> 
            <NumberItem count={item.forksCount} label="Forks" />
            <NumberItem count={item.reviewCount} label="Reviews" />
            <NumberItem count={item.ratingAverage} label="Rating"/>
        </View>
        </>
    )
    /*return (
        <View style={styles.flexContainer}>
            <Image style={styles.tinyLogo} source={{uri: item.ownerAvatarUrl}}/>
            <Text fontWeight="bold" >{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.languageBox}  >{item.language}</Text>
            <Text fontWeight="bold" >Stars: {item.stargazersCount}</Text>
            <Text fontWeight="bold" >Forks: {item.forksCount}</Text>
            <Text fontWeight="bold" >Reviews: {item.reviewCount}</Text>
            <Text fontWeight="bold" >Rating: {item.ratingAverage}</Text>    
        </View> 
    )*/
}

export default Item;