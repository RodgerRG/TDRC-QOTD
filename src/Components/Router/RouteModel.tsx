import HomePage from "../../Pages/HomePage/HomePage";
import PageWrapper from "../../Pages/PageWrapper/PageWrapper";
import { AddCircle, Home, List } from '@material-ui/icons';
import ConstructionPage from "../../Pages/ConstructionPage/ConstructionPage";

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
    },
    {
        name: 'Quotes List',
        endpoint: '/quotes',
        component: PageWrapper(ConstructionPage),
        icon: <List />
    },
    {
        name: 'New Quote',
        endpoint: '/addQuote',
        component: PageWrapper(ConstructionPage),
        icon: <AddCircle />
    },
] as RouteModel[];