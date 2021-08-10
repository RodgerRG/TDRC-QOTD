import Sidebar from './Components/Sidebar/Sidebar';
import { GenerateRoutes } from './Components/Router/RouteGenerator';
import { Switch } from 'react-router-dom';
import { RootState } from './Redux/Stores/rootStore';
import { useSelector } from 'react-redux';

const AppWrapper = () : JSX.Element => {
    const routes = useSelector((state: RootState) => state.sidebar.routes)
    
    return <div>
            <Sidebar />
            <Switch>
                {GenerateRoutes(routes)}
            </Switch>
        </div>
}

export default AppWrapper;