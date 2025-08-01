import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Produto } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
