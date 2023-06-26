import {  Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'


const Stack = createNativeStackNavigator();

export default function Listagem() {

  return (
    <View style={styles.container}>
      <Text>Listagem</Text>
    </View>
  );
}