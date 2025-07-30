import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      if (!state.find((p) => p.id === action.payload.id)) {
        state.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
