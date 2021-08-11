import { AppBar, IconButton, Switch, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { toggleExpanded } from '../../Redux/Slices/sidebarSlice';

export interface HeaderProps {

}

const Header = () : JSX.Element => {
    const dispatch = useDispatch();

    return <AppBar position="sticky">
            <Toolbar>
                <IconButton onClick={() => dispatch(toggleExpanded(true))}>
                    <Menu />
                </IconButton>
                <Typography>
                    ToraDora Rewatch Club - QOTD
                </Typography>
                <Switch checked/>
            </Toolbar>
        </AppBar>
}

export default Header;