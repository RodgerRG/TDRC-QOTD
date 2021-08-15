import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Quote {
    quote: string,
    author: string
}

interface InitialState {
    quotes: Quote[],
    qotd: Quote,
    quoteTime: number
}

const quoteSlice = createSlice({
    name: 'app',
    initialState: {
        quotes: [],
        qotd: !!localStorage.getItem("quote") ? JSON.parse(localStorage.getItem("quote")!) : {quote: '', author: ''},
        quoteTime: localStorage.getItem("quoteTime") ?? 0
    } as InitialState,
    reducers: {
        addQuote: (state, action: PayloadAction<Quote>) => {
            state.quotes.push(action.payload);
        },
        setQuotes: (state, action: PayloadAction<Quote[]>) => {
            state.quotes = action.payload;
        },
        setQOTD: (state, action: PayloadAction<Quote>) => {
            if(Date.now() > state.quoteTime + 1000 * 60 * 60 * 24) {
                state.qotd = action.payload;
                state.quoteTime = Date.now();

                localStorage.setItem("quote", JSON.stringify(action.payload));
                localStorage.setItem("quoteTime", "" + Date.now());
            }
        },
        clearQuote: (state) => {
            console.log('clearing quote...')

            state.quoteTime = 0;
            state.qotd = {quote: '', author: ''};
            localStorage.removeItem('quote');
            localStorage.removeItem('quoteTime');
        }
    }
})

export const { addQuote, setQOTD, setQuotes, clearQuote } = quoteSlice.actions;

export default quoteSlice;