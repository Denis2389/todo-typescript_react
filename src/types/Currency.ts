export interface CurrencyRates {
    [key: string]: number;
}

export interface ExchangeRateResponse {
    rates: CurrencyRates;
    base: string;
    date: string;
}