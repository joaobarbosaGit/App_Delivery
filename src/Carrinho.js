import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';



export default class Carrinho extends Component {

    static navigationOptions = {
        tabBarLabel:'Carrinho',
        tabBarIcon:({focused,tintColor})=>{
            if(focused){
                return(
                    <Image source={require('../assets/images/carrinho_azul.png')} style={StyleSheet.icone}/>
                );
            }else{
                return(
                    <Image source={require('../assets/images/carrinho_preto.png')} style={StyleSheet.icone}/>
                );
            }
        }
    }

    render(){
        return(
            <View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    }
});