import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';


export default class Tela_Sobre extends Component {

    static navigationOptions = {
        title:'Spetaria do Coruja',
        tabBarLabel:'Sobre',
        tabBarIcon:({focused,tintColor})=>{
            if(focused){
                return(
                    <Image source={require('../assets/images/sobre_azul.png')} style={styles.icone}/>
                );
            }else{
                return(
                    <Image source={require('../assets/images/sobre_preto.png')} style={styles.icone}/>
                );
            }
        }
    }

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