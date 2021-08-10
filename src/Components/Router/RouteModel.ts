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
    
    }
] as RouteModel[];