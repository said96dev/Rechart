// src/hooks.js
import { useQuery } from '@tanstack/react-query';
import { fetchKpis, fetchProducts, fetchTransactions } from './api';
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "@/utils/type"
export const useGetKpisQuery = () => {
    return useQuery<GetKpisResponse[]>({
        queryKey: ['kpis'],
        queryFn: fetchKpis,
    });
};

export const useGetProductsQuery = () => {
    return useQuery<GetProductsResponse[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};

export const useGetTransactionsQuery = () => {
    return useQuery<GetTransactionsResponse[]>({
        queryKey: ['transactions'],
        queryFn: fetchTransactions,
    });
};

