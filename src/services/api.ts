import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'store'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
