import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../Slices/appSlice';
import quoteSlice from '../Slices/quoteSlice';
import sidebarSlice from '../Slices/sidebarSlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
        app: appSlice.reducer,
        quote: quoteSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;