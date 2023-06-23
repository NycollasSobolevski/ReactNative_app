import { TextInput,StyleSheet } from "react-native";

const CustomInput = (props) => {
    return (
        <TextInput
            style={props.style}
            placeholder = {props.placeholder}
            placeholderTextColor = {props.placeholderTextColor}
            value = {props.value}
            onChangeText = {props.func}
            secureTextEntry = {props.isPassword}>
            </TextInput>
    )
}



export default CustomInput;