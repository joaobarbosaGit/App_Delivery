import React, {Component} from 'react';
import {View, Image, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';


export class Tela_Carrinho extends Component {

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
            
        };

       
    }

    render(){

        if(this.props.lista.length == 0){
            return(
                <View style= {styles.container}>
                    <Text>
                        Carrinho Vaziu!
                    </Text>
                </View>
            );
        }else{
        return(
            <View style= {styles.container}>
                <FlatList
                data={this.props.lista}
                renderItem={({item})=><Grupo data={item} navigation={this.props.navigation}/>}
                keyExtractor={(item,index)=>item.id.toString()}
                />
            </View>
        );
    }
    }
}

class Grupo extends Component{

    constructor(props){
        super(props);
        this.clicou = this.clicou.bind(this);
    }
        clicou(){
            
        }

        render(){
            return(
                
                <TouchableOpacity  onPress={this.clicou}>
                    <View style = {styles.listaItem}>
                        <View>
                        <Text >{this.props.data.id}</Text>       
                        <Text >{this.props.data.idProduto}</Text>       
                        <Text >{this.props.data.quantidade}</Text>       
                        <Text >{this.props.data.valor}</Text>       
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

const mapStateToProps = (state) => {
    return{
        lista:state.Item.listaitem
    };
};

const CarrinhoConnect = connect(mapStateToProps) (Tela_Carrinho);
export default CarrinhoConnect;