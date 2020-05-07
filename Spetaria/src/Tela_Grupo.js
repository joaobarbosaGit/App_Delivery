import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Tela_Grupo extends Component {

    static navigationOptions = {
        title:'Spetaria do Coruja',
    }

    constructor(props){
        super(props);
        this.state = {
            lista:[]
        };

        fetch('https://joaolucasribeirobarbosa.com.br/delivery/servicos/grupos/listargrupo.php')
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state;
            state.lista = json;
            this.setState(state)
        });
    }

    render(){
        return(
            <View style= {styles.container}>
                <FlatList
                data={this.state.lista}
                renderItem={({item})=><Grupo data={item} navigation={this.props.navigation}/>}
                keyExtractor={(item,index)=>item.idGrupos.toString()}
                />
            </View>
        );
    }
}

 class Grupo extends Component{

    constructor(props){
        super(props);
        this.clicou = this.clicou.bind(this);
    }
        clicou(){
            this.props.navigation.navigate('Tela_Produto',{id_Grupos:this.props.data.idGrupos,title:this.props.data.Nome_Grupo})
        }

        render(){
            return(
                
                <TouchableOpacity  onPress={this.clicou}>
                    <View style = {styles.listaItem}>
                    <Image source={{uri:this.props.data.Imagem}} style = {styles.imagem} />
                        <View>
                            <Text style = {styles.listaTitle} >{this.props.data.Nome_Grupo}</Text>       
                        </View>
                    </View>
                </TouchableOpacity>
               
            );
        }
    }

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1,
        marginTop:(Platform.OS=='iso') ?20 :0,
        backgroundColor:'#cccccc'
    },
    listaTitle:{
        fontSize:30,
        fontWeight:'bold',
        marginLeft:20
    },
    listaItem:{
        height:100,
        backgroundColor:"#ffffff",
        borderRadius:20,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        marginBottom:5,
        marginRight:3,
        marginLeft:3
    },
    imagem:{
        width:80,
        height:80,
        marginLeft:20,
        marginRight:20,
        borderRadius:100,

    }
});