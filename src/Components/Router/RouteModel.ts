export default interface RouteModel {
    name: string,
    endpoint: string,
    component: () => JSX.Element,
    isStrict: boolean,
    isExact: boolean,
    isRedirect: boolean
};