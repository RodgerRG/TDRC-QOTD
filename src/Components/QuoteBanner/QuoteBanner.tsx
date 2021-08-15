import { Card, CardHeader, CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchQuotes from "../../Infrastructure/Firebase";
import { setQOTD, setQuotes } from "../../Redux/Slices/quoteSlice";
import { RootState } from "../../Redux/Stores/rootStore";
import QuoteBannerStyles from "./QuoteBannerStyles";

const QuoteBanner = () : JSX.Element => {
    const quotes = useSelector((state: RootState) => state.quote.quotes);
    const quote = useSelector((state: RootState) => state.quote.qotd);
    const quoteTime = useSelector((state: RootState) => state.quote.quoteTime);
    const dispatch = useDispatch();
    
    const fbQuotes = FetchQuotes();

    useEffect(() => {
        if(quotes.length === 0) dispatch(setQuotes(fbQuotes));

        if(quotes.length > 0 && Date.now() > quoteTime + 1000 * 60 * 60 * 24) {
            const newQuote = quotes[Math.ceil(Math.random() * quotes.length) - 1]
            dispatch(setQOTD(newQuote));
        }
    }, [dispatch, fbQuotes, quoteTime, quotes]);

    const styles = QuoteBannerStyles();

    if(!quote) return <CircularProgress />

    return <Card variant='outlined' className={styles.banner}>
            <CardHeader title={quote!.quote} subheader={quote!.author} className={styles.content}/>
        </Card>
};

export default QuoteBanner;