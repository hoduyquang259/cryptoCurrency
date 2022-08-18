import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "6f05bbecdfmsh58bc80887b917d3p1dc5adjsn3cc9a519f774",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    //useGetCryptosQuery
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    //useGetExchangesQuery
    getExchanges: builder.query({
      query: (count) => createRequest(`/exchanges`),
    }),
    //useGetCryptoDetailsQuery
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}`),
    }),
    //useGetCryptoHistoryQuery
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history`),
    }),

  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;
