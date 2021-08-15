import { createStyles, makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles(createStyles({
    bar: {
        position: 'sticky',
        height: '6vh',
        minHeight: '80px',
        bottom: 0,
        backgroundColor: '#2C3539'
    }
}));

export default FooterStyles;