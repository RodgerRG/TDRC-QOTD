import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

export interface HeaderProps {

}

const Header = () : JSX.Element => {
    return <AppBar position="sticky">
            <Toolbar>
                <IconButton>
                    <Menu />
                </IconButton>
                <Typography>
                    ToraDora Rewatch Club - QOTD
                </Typography>
            </Toolbar>
        </AppBar>
}

export default Header;