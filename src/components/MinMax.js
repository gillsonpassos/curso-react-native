import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'
import estilo from "./estilo";

export default props => (
        <Text style={estilo.TxtG}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
