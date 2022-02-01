import React from 'react';
import { Pressable, View, Text } from 'react-native';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';
import { StyleSheet } from 'react-native';
import theme from '../theme';
//import Text from './Text';

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flexItem: {
        display: 'flex',
        flexDirection: 'column',
        
    },
});

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {
    return (
        <View styles={styles.flexContainer}>
            <View styles={styles.flexItem}>
                <FormikTextInput 
                name="username" 
                placeholder="Username" 
                style={{ 
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: 5, 
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    borderColor:'grey',
                    borderWidth: 1,
                }}
                />
                <FormikTextInput 
                name="password" 
                placeholder="Password" 
                style={{ 
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: 5, 
                    paddingVertical: 30, 
                    paddingHorizontal: 20,
                    borderColor:'grey',
                    borderWidth: 1,
                }}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <Pressable style={{marginTop: 5, flexDirection:'row'}} onPress={onSubmit}>
                    <Text style={{justifyContent:'center', paddingHorizontal: 140, paddingVertical: 30, borderRadius: 5, backgroundColor: theme.backgroundColor.languageTag, color: theme.colors.textAppBar }}>Sign in!</Text>
                </Pressable>
            </View>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = (values) => {
        const password = toString(values.password);
        const username = toString(values.username);

        if(!isnull(password) && !isnull(username)) {
            console.log(values);
        };
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

export default SignIn;