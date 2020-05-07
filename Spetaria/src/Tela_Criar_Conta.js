import React, {Component} from 'react';
import {Alert, ScrollView, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'


export default class Tela_Criar_Conta extends Component{

    constructor(props){
        super(props)

        this.state = { 
        nome:"",
        email:"",
        senha:"",
        telefone:"",
        endereco:"",
        complemento:"",
        lista:[]
        }
       
        this.cadastrar = this.cadastrar.bind(this);
        this.limparCampos = this.limparCampos.bind(this);
        this.verificarEmail = this.verificarEmail.bind(this);
    }
    cadastrar(){
      if(this.state.nome ==""){
        Alert.alert("Mensagem",'Informe seu Nome')
      }else if(this.state.email ==""){
        Alert.alert("Mensagem",'Informe sua Email')
      }else if(this.state.senha ==""){
        Alert.alert("Mensagem","Informe seu Senha")
      }else if(this.state.telefone ==""){
        Alert.alert("Mensagem",'Informe seu Telefone')
      }else if(this.state.endereco ==""){
        Alert.alert("Mensagem",'Informe seu Endereço')
      }else if(this.state.complemento ==""){
        Alert.alert("Mensagem",'Informe seu Complemento, Ex: Proximo ao shopping')
      }else{
        //substiruir espaços por sinal de +
        //var nomeNovo = this.state.nome.replace(" ", "+");
        //var enderecoNovo = this.state.endereco.replace(" ", "+");
        //var complementoNovo = this.state.complemento.replace(" ", "+");

        let url = 'https://joaolucasribeirobarbosa.com.br/delivery/servicos/cliente/adicionarcliente.php?nome=' 
        + this.state.nome + "&email="+ this.state.email +"&senha="+ this.state.senha+ "&telefone="+ this.state.telefone 
        + "&endereco=" + this.state.endereco + '&complemento=' + this.state.complemento;
        fetch(url)
        Alert.alert("Mensagem","Cadastro Salvo")
        this.limparCampos();
      }
    }

    limparCampos() {
      this.setState({nome:''});      
      this.setState({email:''});      
      this.setState({senha:''});      
      this.setState({telefone:''});      
      this.setState({endereco:''});      
      this.setState({complemento:''});      
  }

  verificarEmail(){
    let url = 'https://joaolucasribeirobarbosa.com.br/delivery/servicos/cliente/buscaremailcliente.php?email=' + this.state.email
    fetch(url)
    .then((r)=>r.json())
    .then((json)=>{
    let state = this.state;
    state.lista = json;
    this.setState(state)
    if(this.state.lista.Email == this.state.email){
      Alert.alert("Mensagem","Email ja existente!")
    }else if(this.state.lista.Email == "Vazio"){
      this.cadastrar();
    }
    });

  }


    render(){
        return(
          <ScrollView>
            <KeyboardAvoidingView style={styles.conteiner} behavior="padding" enabled>
                
                <Text style = {styles.texto}>Nome:</Text>
                <TextInput value={this.state.nome} placeholder="Digite seu Nome" style = {styles.input} onChangeText = {(nome)=>this.setState({nome})}/>
                <Text style = {styles.texto}>E-mail:</Text>
                <TextInput value={this.state.email} placeholder="Digite seu Email" style = {styles.input} onChangeText = {(email)=>this.setState({email})}/>
                <Text style = {styles.texto}>Senha:</Text>
                <TextInput value={this.state.senha} placeholder="Digite sua Senha" secureTextEntry = {true} style = {styles.input} onChangeText = {(senha)=>this.setState({senha})}/>
                <Text style = {styles.texto}>Telefone:</Text>
                <TextInputMask placeholder="Digite sua Senha" style = {styles.input} type={'cel-phone'} options={{maskType: 'BRL', withDDD: true,
                dddMask: '(99) ' }} value={this.state.telefone} onChangeText={text => {this.setState({telefone: text})}}/>
                <Text style = {styles.texto}>Endereço:</Text>
                <TextInput value={this.state.endereco} placeholder="Digite seu Endereço" style = {styles.input} onChangeText = {(endereco)=>this.setState({endereco})}/>
                <Text style = {styles.texto}>Complemento:</Text>
                <TextInput value={this.state.complemento} placeholder="Digite seu Complemento" style = {styles.input} onChangeText = {(complemento)=>this.setState({complemento})}/>
                <TouchableOpacity style = {styles.botao} onPress={this.verificarEmail}>
                  <Text style = {styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
            </ScrollView>
       
        );
    }
}

const styles = StyleSheet.create({
  botao:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },
  texto:{
    alignSelf:'flex-start',
    padding:10,
    marginLeft:10
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
  conteiner:{
    flexGrow:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#ffffff',
    marginTop:(Platform.OS=='iso') ?20 :0,
    marginBottom:20
  },
  botaoTexto:{
    color:'#ffffff', 
    fontSize:17, 
    fontWeight:'bold'
  }
});