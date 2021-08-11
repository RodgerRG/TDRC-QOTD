import { RootState } from '../../Redux/Stores/rootStore';
import { useDispatch, useSelector } from 'react-redux';
import { SwipeableDrawer } from '@material-ui/core';
import { toggleExpanded } from '../../Redux/Slices/sidebarSlice';
import { GenerateRoutes } from '../Router/RouteGenerator';

export interface SidebarProps {
    
}

const Sidebar = ({} : SidebarProps) : JSX.Element => {
    const routes = useSelector((state: RootState) => state.sidebar.routes);
    const isOpen = useSelector((state: RootState) => state.sidebar.isExpanded);
    const dispatch = useDispatch();

    return <SwipeableDrawer onOpen={() => dispatch(toggleExpanded(true))} open={isOpen} onClose={() => dispatch(toggleExpanded(false))}>
            {GenerateRoutes(routes)}
        </SwipeableDrawer>
}

export default Sidebar;