import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tela_Login from './Tela_Login';
import Tela_Inicial from './Tela_Inicial';
import Tela_Criar_Conta from './Tela_Criar_Conta';



const AppNavigator = createStackNavigator({
  Tela_Login: {
    screen: Tela_Login,
    navigationOptions: {
      headerShown: false
    }
  },
  Tela_Inicial: {
    screen: Tela_Inicial,
    navigationOptions: {
      headerShown: false
    }
  },
  Tela_Criar_Conta: {
    screen: Tela_Criar_Conta,
    navigationOptions: {
      title: 'Cadastro',
      headerShown: true
    }
  }
}
);



export default createAppContainer(AppNavigator);

