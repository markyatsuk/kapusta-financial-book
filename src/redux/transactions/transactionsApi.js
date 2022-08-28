import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://my-site.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Transaction'],
  endpoints: builder => ({
    fetchTransactions: builder.query({
      query: () => 'transactions',
      providesTags: ['Transaction'],
    }),
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
  }),
});

export const {
  useFetchTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
} = transactionsApi;
