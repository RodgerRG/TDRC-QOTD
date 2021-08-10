import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import RouteModel from '../../Components/Router/RouteModel';

export interface SidebarSliceState {
    routes: RouteModel[],
    isExpanded: boolean
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        routes: [],
        isExpanded: false
    } as SidebarSliceState,
    reducers: {
        addRoute: (state, action: PayloadAction<RouteModel>) => {
            state.routes.push(action.payload);
        },
        toggleExpanded: (state) => {
            state.isExpanded = !state.isExpanded;
        }
    }
});

export const { addRoute } = sidebarSlice.actions;

export default sidebarSlice;