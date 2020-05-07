import React, {Component} from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';



export default class Tela_Carrinho extends Component {

    static navigationOptions = {
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

    constructor(props){
        super(props);
        this.state = {
            lista:[]
        };

       
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