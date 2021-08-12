import HomePage from "../../Pages/HomePage/HomePage";
import PageWrapper from "../../Pages/PageWrapper/PageWrapper";
import { Home } from '@material-ui/icons';
import { ListItemIcon } from "@material-ui/core";

export default interface RouteModel {
    name: string,
    endpoint: string,
    component: () => JSX.Element,
    icon: JSX.Element,
    isStrict: boolean,
    isExact: boolean,
    isRedirect: boolean
};

export const Routes = [
    {
        name: 'Home',
        endpoint: '/home',
        component: PageWrapper(HomePage),
        icon: <Home />
    }
] as RouteModel[];