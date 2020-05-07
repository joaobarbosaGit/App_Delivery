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
      }},
      Tela_Pedidos,
      Tela_Carrinho,
      Tela_Sobre
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