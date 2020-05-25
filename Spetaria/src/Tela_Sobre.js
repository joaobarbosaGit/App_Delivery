import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';


export default class Tela_Sobre extends Component {

    //static navigationOptions = {
        
    //}

    render(){
        return(
            <View style = {styles.principal}>
                <Text>Em Construção</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    principal:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});