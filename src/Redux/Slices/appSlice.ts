import { PaletteType } from "@material-ui/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    theme: PaletteType
}

const appSlice = createSlice({
    name: 'app',
    initialState: {
        theme: 'dark'
    } as InitialState,
    reducers: {
        setTheme: (state, action: PayloadAction<PaletteType>) => {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = appSlice.actions;

export default appSlice;