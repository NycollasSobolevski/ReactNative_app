import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={(EsteValor) => setEmailInputValue(EsteValor)}/>

      <Text> { email } </Text>

      <TextInput
        placeholder='Senha'
        value={senha}
        secureTextEntry={true}
        onChangeText = {(EsteValor) => setPasswordInputValue(EsteValor)}/>
      
      <Button title='Entrar'/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
