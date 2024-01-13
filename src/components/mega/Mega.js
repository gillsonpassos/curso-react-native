import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import Estilo from "../estilo";

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero(qtde) {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={Estilo.TxtG}>
                    Gerador de Mega-Sena
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                placeholder="Qtde de Numeros"
                value={this.state.qtdeNumeros}
                onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}