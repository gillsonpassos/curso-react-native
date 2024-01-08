import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({ usuario = {} }) => {
    return (
        <>
        <Text style={Estilo.TxtG}>Usuário Logado</Text>
         <Text style={Estilo.TxtG}>{usuario.nome} - {usuario.email}
        </Text>
        </>
    )
}