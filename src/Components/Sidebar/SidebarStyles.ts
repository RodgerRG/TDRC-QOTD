import { createStyles, makeStyles } from "@material-ui/core";

const SidebarStyles = makeStyles(createStyles({
    sidebar: {

    },
    item: {
        width: '12vw',
        minWidth: '200px',
        maxWidth: '400px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    itemIcon: {
        padding: '4%'
    },
    itemText: {
        alignSelf: 'right'
    }
}));

export default SidebarStyles;