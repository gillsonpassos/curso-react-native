import React from 'react'
import { Text, Platform } from 'react-native'
import Estilo from './estilo'

export default _ => {
    if(Platform.OS === 'android') {
        return <Text style={Estilo.TxtG}>Android</Text>
    } else if(Platform.OS === 'ios') {
        return <Text style={Estilo.TxtG}>ios</Text>
    } else {
        return <Text style={Estilo.TxtG}>Eita!!!</Text>
    }
}




    