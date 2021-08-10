import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import RouteModel from '../../Components/Router/RouteModel';

export interface SidebarSliceState {
    routes: RouteModel[]
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        routes: []
    } as SidebarSliceState,
    reducers: {
        addRoute: (state, action: PayloadAction<RouteModel>) => {
            state.routes.push(action.payload);
        } 
    }
});

export const { addRoute } = sidebarSlice.actions;

export default sidebarSlice;