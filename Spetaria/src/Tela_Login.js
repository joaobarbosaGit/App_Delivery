import React,{Component} from 'react';
import {Text, StyleSheet, View, 
  TextInput, KeyboardAvoidingView, 
  TouchableOpacity, Alert, Animated, Platform} from 'react-native';;

export default class Spetaria extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      email:"",
      senha:"",
      emailUsuario:"",
      senhaUsuario:"",
      offset: new Animated.ValueXY({x:0, y:95}),
      opacity:(new Animated.Value(0)),
      logo:new Animated.ValueXY({x:150,y:150})

    };

      Animated.parallel([ 
        Animated.spring(this.state.offset.y,{
        toValue:0,
        speed:1,
        bounciness:20,
        useNativeDriver: true
      }),
      Animated.timing(this.state.opacity,{
        toValue:1,
        duration:500,
        useNativeDriver: true
      })
    ]).start();
     
    this.limparCampos = this.limparCampos.bind(this);
    this.singIn = this.singIn.bind(this);
    this.verificarEmail = this.verificarEmail.bind(this);
    
  }

  limparCampos() {
    this.setState({email:''});      
    this.setState({senha:''});      
  }
  singIn(){

    this.limparCampos();
    this.props.navigation.navigate('Tela_Inicial')
  }

  verificarEmail(){
    let url = 'https://joaolucasribeirobarbosa.com.br/delivery/servicos/cliente/buscarclientelogin.php?email=' + this.state.email
    fetch(url)
    .then((r)=>r.json())
    .then((json)=>{
    let state = this.state;
    state.emailUsuario = json.Email;
    state.senhaUsuario = json.Senha;
    this.setState(state)
    if(this.state.email ==""){
      Alert.alert("Mensagem",'Informe seu Email')
    }else if(this.state.senha ==""){
      Alert.alert("Mensagem",'Informe sua Senha')
    }else{
      if(this.state.emailUsuario == this.state.email){
        if(this.state.senhaUsuario == this.state.senha){
        Alert.alert("Mensagem","Bem Vindo!")
        this.singIn();
        }else{
        Alert.alert("Mensagem","Senha Incoreta!")
        }
      }else if(this.state.emailUsuario == "Vazio"){
       Alert.alert("Mensagem","Email não cadastrado")
      }
    }});
  
  }


  render(){

    return(
      <KeyboardAvoidingView style={styles.backgound}  behavior="height" enabled>
      <View style={styles.containerLogo}>
            <Animated.Image source={require('../assets/images/logo.jpg')}
            style={{
            width:this.state.logo.x,
            height:this.state.logo.y,
            borderRadius:100
            }}/>
            </View>
      <Animated.View style={[
        styles.container,{
          opacity:this.state.opacity,
          transform:[
            {
              translateY:this.state.offset.y
            }
          ]
        }
        ]}>
        <TextInput
        value={this.state.email}
        style={styles.input} 
        placeholder="Email"
        autoCorrect={false}
        onChangeText={(email)=>this.setState({email})}
        />
         <TextInput
        secureTextEntry = {true}
        value={this.state.senha}
        style={styles.input} 
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={(senha)=>this.setState({senha})}
        />
      <TouchableOpacity style={styles.botaoEntrar} onPress={this.verificarEmail}>
        <Text style={styles.botaoTexto} >Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoNovaConta} onPress={()=> this.props.navigation.navigate('Tela_Criar_Conta')}>
        <Text style = {{fontSize:17}}>Criar Conta</Text>
      </TouchableOpacity>   
      </Animated.View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
backgound:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:'#ffffff',
  marginTop:(Platform.OS=='iso') ?20 :0
},
container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  width:"90%",
  marginBottom:80
},
input:{
  borderColor:'#1287EF',
  borderWidth:0.2,
  width:"90%",
  marginBottom:15,
  color:'#222222',
  fontSize:17,
  fontWeight:'bold',
  borderRadius:7,
  padding:10
},
botaoEntrar:{
  backgroundColor:'#35AAFF',
  width:'90%',
  height:45,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:7
},
botaoNovaConta:{
  marginTop:15
},
submitText:{
  color:'#ffffff',
  fontSize:18
},
  registreText:{
  color:'#ffffff'
},
containerLogo:{
  marginTop:10,
  flex:1,
  justifyContent:"center"
},
botaoTexto:{
  color:'#ffffff', 
  fontSize:17, 
  fontWeight:'bold'
}
})