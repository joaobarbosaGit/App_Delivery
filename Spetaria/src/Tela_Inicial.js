import { StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Tela_Grupo from './Tela_Grupo';
import Tela_Produto from './Tela_Produto';
import Tela_Sobre from './Tela_Sobre';
import Tela_Carrinho from './Tela_Carrinho';
import Tela_Pedidos from './Tela_Pedidos';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import Reducers from './Reducers';
import {createStore} from 'redux';

let store = createStore(Reducers);

const  TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: createStackNavigator(
        {
          Tela_Grupo,
          Tela_Produto            
        },
      ), navigationOptions: {
        title:'Spetaria do Coruja',
        tabBarLabel:'Home',
        tabBarIcon:({focused,tintColor})=>{
            if(focused){
                return(
                    <Image source={require('../assets/images/home_azul.png')} style={styles.icone}/>
                );
            }else{
                return(
                    <Image source={require('../assets/images/home_preto.png')} style={styles.icone}/>
                );
            }
        }            
      }
    },
      Tela_Pedidos:{
        screen:Tela_Pedidos,
        navigationOptions:{
          title:'Pedidos',
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
      },
      Tela_Carrinho:{
        screen:Tela_Carrinho,
        navigationOptions:{
          title:'Spetaria do Coruja',
        tabBarLabel:'Carrinho',
        tabBarIcon:({focused,tintColor})=>{
            if(focused){
                return(
                    <Image source={require('../assets/images/carrinho_azul.png')} style={styles.icone}/>
                );
            }else{
                return(
                    <Image source={require('../assets/images/carrinho_preto.png')} style={styles.icone}/>
                );
            }
        }
        }
      },
      Tela_Sobre:{
        screen:Tela_Sobre,
        navigationOptions:{
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
      }
    },
  ),
);
const styles = StyleSheet.create({
  icone:{
          height: 26,
          width: 26
  }
});

//export default TabNavigator;

export default class AppRedux extends Component{
  render(){
    return(
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    );
  }
}