import { createStyles, makeStyles } from "@material-ui/core";

const QuoteBannerStyles = makeStyles(createStyles({
    banner: {
        height: '100%'
    },
    content: {
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
}));

export default QuoteBannerStyles;