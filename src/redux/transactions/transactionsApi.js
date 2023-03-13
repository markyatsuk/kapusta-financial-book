import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://finance-book-server.onrender.com/api/',
    keepUnusedDataFor: 0,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Transaction'],
  endpoints: builder => ({
    createTransaction: builder.mutation({
      query: newTransaction => ({
        url: 'transactions',
        method: 'POST',
        body: newTransaction,
      }),
      invalidatesTags: ['Transaction'],
    }),
    deleteTransaction: builder.mutation({
      query: transactionId => ({
        url: `transactions/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Transaction'],
    }),
    updateTransaction: builder.mutation({
      query: (transactionId, patch) => ({
        url: `transactions/${transactionId}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Transaction'],
    }),
    fetchSummary: builder.query({
      query: type => `transactions/report/${type}`,
      providesTags: ['Transaction'],
      keepUnusedDataFor: 0,
    }),
    fetchByDate: builder.query({
      query: date => `transactions/${date}`,
      providesTags: ['Transaction'],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useFetchTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
  useFetchSummaryQuery,
  useFetchByDateQuery,
} = transactionsApi;
