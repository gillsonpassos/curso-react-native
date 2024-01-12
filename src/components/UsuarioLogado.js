import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import _if from './if'

export default ({ usuario = {} }) => {
    return (

    <>
        <If>
           <Text style={Estilo.TxtG}>Usuário Logado</Text>
           <Text style={Estilo.TxtG}>
               {usuario.nome} - {usuario.email}
            </Text>
           
        </If>
    </>
    )
}