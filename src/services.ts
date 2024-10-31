import axios from "axios";
import { ExchangeRateResponse } from "./types/Currency";

const API_URL = 'https://api.exchangerate-api.com/v4/latest';

export const fetchExchangeRates = async (baseCurrency: string): Promise<ExchangeRateResponse> => {
    const response = await axios.get<ExchangeRateResponse>(`${API_URL}/${baseCurrency}`)
    return response.data
}