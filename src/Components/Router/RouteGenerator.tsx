import React from 'react';
import { Route } from 'react-router-dom';
import RouteModel from './RouteModel';

export interface SwitchRouteProps {
    route: RouteModel
}

const SwitchRoute = ({route} : SwitchRouteProps) : JSX.Element => {
    return <Route path={route.endpoint} key={route.name} component={route.component}>
        </Route>
};

export const GenerateRoutes = (routes : RouteModel[]) : JSX.Element[] => {
    return routes.map(route => SwitchRoute({route}));
}

export default SwitchRoute;