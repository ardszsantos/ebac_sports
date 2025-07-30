import React from 'react'
import { useGetProdutosQuery } from '../services/api'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { adicionarAoCarrinho } from '../store/reducers/carrinhoSlice'
import { favoritar } from '../store/reducers/favoritosSlice'
import * as S from './styles'
import ProdutoComponent from '../components/Produto'
import { Produto } from '../App'

const Produtos: React.FC = () => {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  const estaNosFavoritos = (produto: Produto) =>
    favoritos.some((f) => f.id === produto.id)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          estaNosFavoritos={estaNosFavoritos(produto)}
          favoritar={() => dispatch(favoritar(produto))}
          aoComprar={() => dispatch(adicionarAoCarrinho(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
