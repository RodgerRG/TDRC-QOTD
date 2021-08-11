import Sidebar from './Components/Sidebar/Sidebar';
import { GenerateRoutes } from './Components/Router/RouteGenerator';
import { Switch } from 'react-router-dom';
import { RootState } from './Redux/Stores/rootStore';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Footer from './Components/Footer/Footer';

const darkTheme = createTheme({
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
    
    return <ThemeProvider theme={darkTheme}>
        <div>
            <Header />
            <Sidebar />
            <Switch>
                {GenerateRoutes(routes)}
            </Switch>
            <Footer />
        </div>
        </ThemeProvider> 
}

export default AppWrapper;