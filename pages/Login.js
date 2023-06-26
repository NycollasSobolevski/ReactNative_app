import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import  CustomInput  from '../components/CustomInput';
import Logo from '../assets/React-icon.svg.png';
import { useEffect, useState } from 'react';
import app from '../firebaseConfig';

const Stack = createNativeStackNavigator();

export default function Login() {
  const auth = getAuth(app);
  const navigation = useNavigation();
  
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();


  useEffect(() => {
    console.log(auth.currentUser);
    if(auth.currentUser)
      navigation.navigate('Listagem')
  }, [auth.currentUser])

  const setEmailInputValue = (value) =>{
    setEmail(value)
  }
  const setPasswordInputValue = (value) => {
    setSenha(value)
  }

  const criarUser = (value) =>{
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredentials) => {
        console.log(userCredentials);
      }).catch((err) => {
        console.error(err);
      })
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredentials) => {
        console.log(userCredentials);
      }).catch((err) => {
        console.error(err);
      })
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
      
        <TouchableOpacity onPress={signIn}>
          <View style={{backgroundColor:'#00d8ff', width:156, height:45, alignItems:'center', justifyContent:"center", borderRadius:15}}>
            <Text>Entrar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={criarUser}>
          <View style={{backgroundColor:'#00d8ff', width:156, height:45, alignItems:'center', justifyContent:"center", borderRadius:15}}>
            <Text>Cadastrar</Text>
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
