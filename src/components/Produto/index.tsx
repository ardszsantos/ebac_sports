import React from 'react'
import type { Produto } from '../../App'
import * as S from './styles'

type Props = {
  produto: Produto
  aoComprar: () => void
  favoritar: () => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent: React.FC<Props> = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}) => (
  <S.Produto>
    <S.Capa>
      <img src={produto.imagem} alt={produto.nome} />
    </S.Capa>
    <S.Titulo>{produto.nome}</S.Titulo>
    <S.Prices>
      <strong>{paraReal(produto.preco)}</strong>
    </S.Prices>
    <S.BtnComprar onClick={favoritar} type="button">
      {estaNosFavoritos
        ? '- Remover dos favoritos'
        : '+ Adicionar aos favoritos'}
    </S.BtnComprar>
    <S.BtnComprar onClick={aoComprar} type="button">
      Adicionar ao carrinho
    </S.BtnComprar>
  </S.Produto>
)

export default ProdutoComponent
