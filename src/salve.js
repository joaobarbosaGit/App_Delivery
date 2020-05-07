import React,{Component, useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Animated, Keyboard} from 'react-native';;

export default function Spetaria(){

  const [offset] = useState(new Animated.ValueXY({x:0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:150,y:150}));

  
  useEffect(()=>{
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow',KeyboardDidShow)
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide',KeyboardDidHide)


    Animated.parallel([ 
      Animated.spring(offset.y,{
      toValue:0,
      speed:1,
      bounciness:20,
      useNativeDriver: true
    }),
    Animated.timing(opacity,{
      toValue:1,
      duration:500,
      useNativeDriver: true
    })
  ]).start();
   
  },[]);


 
  
    return(
      <KeyboardAvoidingView style={styles.backgound}>
        <View style={styles.containerLogo}>
          <Animated.Image source={require('../assets/images/logo.jpg')}
          style={{
            width:logo.x,
            height:logo.y,
            borderRadius:100
          }}/>
        </View>
      <Animated.View style={[
        styles.container,{
          opacity:opacity,
          transform:[
            {
              translateY:offset.y
            }
          ]
        }
        ]}>
        <TextInput
        style={styles.input} 
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=>{}}
        />
         <TextInput
        style={styles.input} 
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=>{}}
        />
      <TouchableOpacity style={styles.botaoEntrar} onPress={()=> navegar('Tela_Inicial')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoNovaConta}>
        <Text>Criar Conta</Text>
      </TouchableOpacity>   
      </Animated.View>
      </KeyboardAvoidingView>
    )

    function KeyboardDidShow (){
      Animated.parallel([
        Animated.timing(logo.x,{
          toValue:70,
          duration:100,
          //useNativeDriver: true
        }),
        Animated.timing(logo.y,{
          toValue:85,
          duration:100,
          //useNativeDriver: true
        }),
      ]).start();
    }
    function KeyboardDidHide (){
      Animated.parallel([
        Animated.timing(logo.x,{
          toValue:150,
          duration:100,
          //useNativeDriver: true
        }),
        Animated.timing(logo.y,{
          toValue:150,
          duration:100,
          //useNativeDriver: true
        }),
      ]).start();
    }
  }




const styles = StyleSheet.create({
backgound:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:'#ffffff'
},
containerLogo:{
  marginTop:20,
  flex:1,
  justifyContent:"center"
},
container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  width:"90%",
  marginBottom:80
},
input:{
  borderColor:'#191919',
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
  borderRadius:7,
  color:'#ffffff'
},
botaoNovaConta:{
  marginTop:10
},
submitText:{
  color:'#ffffff',
  fontSize:18
},
  registreText:{
  color:'#ffffff'
}
})