import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, Touchable, TouchableOpacity } from 'react-native';
import Logo from './assets/React-icon.svg.png'
import  CustomInput  from './components/CustomInput'

export default function App() {
  
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const setEmailInputValue = (value) =>{
    setEmail(value)
  }
  const setPasswordInputValue = (value) => {
    setSenha(value)
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width : 130,
          height : 130,
          resizeMode: 'contain'
        }}/>

      <CustomInput style={styles.inputWraper} value={email} placeholder='Email' placeholderTextColor='#00d8ff' func={setEmailInputValue}/>
      <CustomInput style={styles.inputWraper} value={senha} placeholder='Senha' placeholderTextColor='#00d8ff' func={setPasswordInputValue}
         isPassword={true}/>
      
        <TouchableOpacity>
          <View style={{backgroundColor:'#00d8ff', width:156, height:45, alignItems:'center', justifyContent:"center", borderRadius:15}}>
            <Text>Entrar</Text>
          </View>
        </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
    inputWraper : {
    paddingLeft:10,
    width:306,height:45,
    color:"#00d8ff",
    borderRadius:8,
    backgroundColor:'#302850',
    },

  container: {
    flex: 1,
    paddingTop:150,
    backgroundColor: '#433576',
    alignItems: 'center',
    gap:25,
  },
});
