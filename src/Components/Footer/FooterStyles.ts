import { createStyles, makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles(createStyles({
    bar: {
        position: 'sticky',
        height: '6vh',
        minHeight: '60px',
        bottom: 0,
        backgroundColor: '#252525'
    }
}));

export default FooterStyles;