import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

function Comp() {
    return <Text style={Estilo.fontG}>comp #0ficial</Text>
    
}

function Comp1() {
    return <Text style={Estilo.fontG}>comp #01</Text>


}

function Comp2() {
    return <Text style={Estilo.fontG}>comp #02</Text>


}

export { Comp1, Comp2 }
export default Comp