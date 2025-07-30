import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}
