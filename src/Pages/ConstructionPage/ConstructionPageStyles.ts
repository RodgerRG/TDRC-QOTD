import { createStyles, makeStyles } from "@material-ui/core";

const ConstructionPageStyles = makeStyles(createStyles({
    wrapper: {
        minHeight: '88vh',
        backgroundColor: '#252525',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    warning: {
        color: '#FFF',
        textAlign: 'center',
        wordBreak: 'break-word'
    },
    imageWrapper: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        maxWidth: '100%',
    },
    image: {
        width: '30%'
    }
}));

export default ConstructionPageStyles;