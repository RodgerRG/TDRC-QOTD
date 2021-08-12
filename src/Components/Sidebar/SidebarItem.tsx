import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { RootState } from '../../Redux/Stores/rootStore';
import RouteModel from '../Router/RouteModel';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import SidebarStyles from './SidebarStyles';

export interface SidebarItemProps {
    route: RouteModel
}

const SidebarItem = ({route} : SidebarItemProps) : JSX.Element => {
    const isExpanded = useSelector((state: RootState) => state.sidebar.isExpanded);
    const history = useHistory();
    const styles = SidebarStyles();

    return <ListItem button onClick={() => history.push(route.endpoint)} className={styles.item}>
            <ListItemIcon className={styles.itemIcon}>
                {route.icon}
            </ListItemIcon>
            {isExpanded ? <ListItemText primary={route.name} className={styles.itemText}></ListItemText> : null}
        </ListItem>
};

export const GenerateSidebarItems = (routes : RouteModel[]) : JSX.Element[] => {
    return routes.map(route => SidebarItem({route}));
}

export default SidebarItem;