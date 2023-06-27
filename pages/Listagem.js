import {  Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { axios } from 'axios';
import { useEffect } from 'react';

export default function Listagem() {

  useEffect(() => {
    const getTransitions = async() => {
      const response = axios.get('http://localhost:3000/transactions')
      console.log(response);
    }

    getTransitions()
  })

  return (
    <View style={styles.container}>
      <Text>Listagem</Text>
    </View>
  );
}