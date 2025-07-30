import React from 'react'
import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import * as S from './styles'
import { RootState } from '../../store'
import { paraReal } from '../Produto'

const Header: React.FC = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const total = itensNoCarrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(total)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
