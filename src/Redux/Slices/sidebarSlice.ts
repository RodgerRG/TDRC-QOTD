import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import RouteModel, { Routes } from '../../Components/Router/RouteModel';

export interface SidebarSliceState {
    routes: RouteModel[],
    isExpanded: boolean
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        routes: Routes,
        isExpanded: false
    } as SidebarSliceState,
    reducers: {
        addRoute: (state, action: PayloadAction<RouteModel>) => {
            state.routes.push(action.payload);
        },
        toggleExpanded: (state, action: PayloadAction<boolean>) => {
            state.isExpanded = action.payload;
        }
    }
});

export const { addRoute, toggleExpanded } = sidebarSlice.actions;

export default sidebarSlice;