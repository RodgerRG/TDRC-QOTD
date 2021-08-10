import React from 'react';
import { RootState } from '../../Redux/Stores/rootStore';
import { useSelector } from 'react-redux';
import { Drawer } from '@material-ui/core';

export interface SidebarProps {
    
}

const Sidebar = ({} : SidebarProps) : JSX.Element => {
    const routes = useSelector((state: RootState) => state.sidebar.routes);

    return <Drawer>
        </Drawer>
}

export default Sidebar;