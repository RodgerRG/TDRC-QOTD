import { createStyles, makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles(createStyles({
    header: {
        height: '6vh',
        display: 'flex',
        minHeight: '60px',
        alignContent: 'center',
        justifyContent: 'center'
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        flexGrow: 1,
        fontSize: '4vw',
    },
    menuIcon: {
        alignSelf: 'left'
    }
}));

export default HeaderStyles;