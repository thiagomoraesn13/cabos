
import React from 'react'
import { StatusBar, Platform } from 'react-native'

import { StackNavigator } from 'react-navigation'


import Login from './Login'
import Usuario from './Usuario'
import Cadastro from './Cadastro'
import Produt from './ListadeProdutos'
import Lista from './Lista'
import Informacoes from './Informacoes'

const App = StackNavigator({
  Lista:{
    screen: Lista
  },
  Informacoes:{
    screen: Informacoes
  },
  Produt:{
    screen: Produt
  },

  Login: {
    screen: Login
  },

  Cadastro:{
    screen: Cadastro
  },
  Usuario:{
    screen: Usuario
  },
  
})

export default App