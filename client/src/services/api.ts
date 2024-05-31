// src/api.js
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from '@/utils/type';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;


export const fetchKpis = async (): Promise<GetKpisResponse[]> => {
    const { data } = await axios.get<GetKpisResponse[]>(`${baseUrl}/kpi/kpis/`);
    return data;
};

export const fetchProducts = async (): Promise<GetProductsResponse[]> => {
    const { data } = await axios.get<GetProductsResponse[]>(`${baseUrl}/product/products/`);
    return data;
};

export const fetchTransactions = async (): Promise<GetTransactionsResponse[]> => {
    const { data } = await axios.get<GetTransactionsResponse[]>(`${baseUrl}/transaction/transactions/`);
    return data;
};
