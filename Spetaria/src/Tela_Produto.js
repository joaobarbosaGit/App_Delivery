import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, FlatList, Modal, Button, Alert} from 'react-native';
import {Stepper} from 'teaset';
import {connect} from 'react-redux';

export class Tela_Produto extends Component {


    constructor(props){
        super(props);
            this.state = {
                lista:[]
            };
            let url = 'https://joaolucasribeirobarbosa.com.br/delivery/servicos/produto/listarprodutosid.php?grupos_idgrupos=';
            fetch(url.concat(props.navigation.state.params.id_Grupos))
            .then((r)=>r.json())
            .then((json)=>{
            let state = this.state;
            state.lista = json;
            this.setState(state)
        });


        };

    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
        tabBarLabel:'Home',

    });

    render(){
        return(
            <View style= {styles.container}>
                <FlatList
                data={this.state.lista}
                renderItem={({item})=><ProductItem data={item} />}
                keyExtractor={(item,index)=>item.idProduto.toString()}
                />
                
            </View>

        );
    }
}

class ProductItem extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
            quantidade:1,
            valorTotal:1 * props.data.Valor,
        }
        this.AbrirModal = this.AbrirModal.bind(this);
        this.FecharModal = this.FecharModal.bind(this);
        this.adicionarItemPedido = this.adicionarItemPedido.bind(this);
        this.formatarNumeros = this.formatarNumeros.bind(this);
        this.formatarNumeros2 = this.formatarNumeros2.bind(this);
    }
    
    AbrirModal(){
        let s = this.state;
        s.modalVisible = true;
        this.setState(s);
    }
    FecharModal(){
        let s = this.state;
        s.modalVisible = false;
        this.setState(s);
    }
    adicionarItemPedido(){
        Alert.alert("Mensagem","ok")
    }
    formatarNumeros(valor){
        return valor.toFixed(2).replace(".",",");
    }
    formatarNumeros2(valor){
        return valor.replace(".",",");
    }
    render(){
        
        return(
            <View>
            <Modal animationType="slide" visible = {this.state.modalVisible}>
               <View style = {styles.modal}>
                    <View style = {styles.modalView1}>
                        <Text style ={styles.modalTexto1}>{this.props.data.Nome_Produto}</Text>
                        <Text style ={styles.modalTexto2}>{this.props.data.Descricao}</Text>
                    </View>
                    <View style = {styles.modalView3}>
                        <Text style ={styles.modalTexto3}>Quantidade:</Text>
                        <Stepper style={styles.stepper} onChange={v => this.setState({quantidade: v, valorTotal: v * this.props.data.Valor})}  showSeparator={false} value={this.state.quantidade} valueStyle={{color: '#8a6d3b', fontSize:30}} min={1} max={100}
                                subButton={ 
                                        <View style={styles.stepperButton}>
                                            <Text style={{color: '#8a6d3b'}}>－</Text>
                                        </View>
                                        }
                                addButton={
                                        <View style={styles.stepperButton}>
                                            <Text style={{color: '#8a6d3b'}}>＋</Text>
                                        </View>
                                        }
  
                        />
                    </View>
                    <View style = {styles.modalView3}>    
                        <Text style ={styles.modalTexto3}>Valor Unitario:</Text>                
                        <Text style = {styles.modalTexto3}>R$ {this.formatarNumeros2(this.props.data.Valor)}</Text>
                    </View>
                    <View style = {styles.modalView3}>    
                        <Text style ={styles.modalTexto3}>Valor Total:</Text>                
                        <Text style = {styles.modalTexto3}>R$ {this.formatarNumeros(this.state.valorTotal)}</Text>
                    </View>
                    
                    <View style = {styles.modalView2}>
                        <Button title='Adicionar' onPress={this.adicionarItemPedido}/>
                        <Button title='Sair' onPress={this.FecharModal}/>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={this.AbrirModal}>
            <View style = {styles.produtc}>
                <Text style = {styles.title}>{this.props.data.Nome_Produto}</Text>
                <View>
                    <Text style ={styles.valor}>Valor: R$ {this.props.data.Valor}</Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#cccccc",
        flex:1,
    },
    produtc:{
        height:100,
        backgroundColor:"#ffffff",
        marginTop:5,
        marginRight:3,
        marginLeft:3,
        marginBottom:5,
        borderRadius:20,
        padding:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    }, 
    valor:{
        fontSize:20,
    },
    modal:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
    modalView1:{
        
    },
    modalView2:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:200,
        marginTop:10
        
    },
    modalView3:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        marginBottom:10
        
    },
    modalTexto1:{
        alignSelf:'center',
        fontSize:35,
        fontWeight:'bold',
        marginRight:10
    },
    modalTexto2:{
        alignSelf:'center',
        fontSize:20,
        padding:30
    },
    modalTexto3:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        marginRight:10
    },
    input:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:"center"
    
      },
      stepperButton:{
        backgroundColor: '#rgba(238, 169, 91, 0.1)', 
        borderColor: '#8a6d3b', 
        borderWidth: 1, 
        borderRadius:4, 
        width: 40, 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
      stepper:{
        borderWidth: 0,
        padding:10
      }
});

const mapStateToProps = (state) => {
    return{
        itens:state.Item.listaitem
    };
};

const ItemConnect = connect(mapStateToProps) (Tela_Produto);
export default ItemConnect;