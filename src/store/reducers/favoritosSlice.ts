import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Produto[],
  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      const idx = state.findIndex((p) => p.id === action.payload.id)
      if (idx >= 0) state.splice(idx, 1)
      else state.push(action.payload)
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
