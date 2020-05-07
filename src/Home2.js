import Index from '../Spetaria/src/Index'
import Produtos from './Produtos.js'
import {createStackNavigator} from 'react-navigation-stack';

const Navegador = createStackNavigator({
    Index:{
      screen:Index,
      navigationOptions:{
        headerShown: false
      }
    },
    Produtos:{
      screen:Produtos,
      navigationOptions:{
        headerShown: false
      }
    }
  });
export default Navegador;