import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { RootState } from '../../Redux/Stores/rootStore';
import RouteModel from '../Router/RouteModel';
import { useSelector } from 'react-redux';
import SwitchRoute from '../Router/RouteGenerator';
import { useHistory } from 'react-router-dom';

export interface SidebarItemProps {
    route: RouteModel
}

const SidebarItem = ({route} : SidebarItemProps) : JSX.Element => {
    const isExpanded = useSelector((state: RootState) => state.sidebar.isExpanded);
    const history = useHistory();

    return <ListItem button onClick={() => history.push(route.endpoint)}>
            <ListItemIcon>
                {route.icon}
            </ListItemIcon>
            isExpanded ? <ListItemText primary={route.name}></ListItemText> : null;
        </ListItem>
};

const GenerateRoutes = (routes : RouteModel[]) : JSX.Element[] => {
    return routes.map(route => SidebarItem({route}));
}

export default SidebarItem;