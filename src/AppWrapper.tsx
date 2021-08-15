import Sidebar from './Components/Sidebar/Sidebar';
import { GenerateRoutes } from './Components/Router/RouteGenerator';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootState } from './Redux/Stores/rootStore';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Footer from './Components/Footer/Footer';
import 'firebase/firestore';
import { firebaseConfig } from './Infrastructure/Firebase';
import { FirebaseAppProvider } from 'reactfire';

const darkTheme = () => createTheme({
    palette: {
        primary: {
            main: '#252525'
        },
        secondary: {
            main: red[500]
        },
        type: 'dark'
    }
})

const AppWrapper = () : JSX.Element => {
    const routes = useSelector((state: RootState) => state.sidebar.routes)

    return <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ThemeProvider theme={darkTheme()}>
            <div>
                <Header />
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    {GenerateRoutes(routes).map(route => {
                        return route;
                    })}
                </Switch>
                <Footer />
            </div>
        </ThemeProvider> 
        </FirebaseAppProvider>
}

export default AppWrapper;