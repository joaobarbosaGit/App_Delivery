import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Login extends Component {

    static navigationOptions = {
        title:"Login"
    };

    render(){
        return(
            <View>
                <Text>Login</Text>
                <Button title='Entrar' onPress={()=> this.props.navigation.navigate('HomeTab')}/>
            </View>
        );
    }

}