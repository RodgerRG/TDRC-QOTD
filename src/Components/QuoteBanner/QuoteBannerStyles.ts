import { createStyles, makeStyles } from "@material-ui/core";

const QuoteBannerStyles = makeStyles(createStyles({
    banner: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardWrapper: {
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    card: {
        minHeight: '50%',
        minWidth: '60%',
        width: 'max-content',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: '300%',
        wordBreak: 'break-word'
    },
    cardName: {
        fontSize: '2rem'
    },
    birthdayHeader: {
        alignContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        padding: '5% 0'
    }
}));

export default QuoteBannerStyles;