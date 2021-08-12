import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { toggleExpanded } from '../../Redux/Slices/sidebarSlice';
import HeaderStyles from './HeaderStyles';

export interface HeaderProps {

}

const Header = () : JSX.Element => {
    const dispatch = useDispatch();
    const styles = HeaderStyles();

    return <AppBar position="sticky" className={styles.header}>
            <Toolbar>
                <IconButton onClick={() => dispatch(toggleExpanded(true))}>
                    <Menu />
                </IconButton>
                <Typography>
                    ToraDora Rewatch Club - QOTD
                </Typography>
            </Toolbar>
        </AppBar>
}

export default Header;