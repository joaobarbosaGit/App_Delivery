import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';



export default class Tela_Pedidos extends Component {

    static navigationOptions = {
        title:'Spetaria do Coruja',
        tabBarLabel:'Pedidos',
        tabBarIcon:({focused,tintColor})=>{
            if(focused){
                return(
                    <Image source={require('../assets/images/pedidos_azul.png')} style={styles.icone}/>
                );
            }else{
                return(
                    <Image source={require('../assets/images/pedidos_preto.png')} style={styles.icone}/>
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