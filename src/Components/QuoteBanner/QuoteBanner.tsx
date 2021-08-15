import { Card, CardHeader } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import SyncQuotes from "../../Infrastructure/Firebase";
import { setQOTD } from "../../Redux/Slices/quoteSlice";
import { RootState } from "../../Redux/Stores/rootStore";
import QuoteBannerStyles from "./QuoteBannerStyles";

const QuoteBanner = () : JSX.Element => {
    const quotes = useSelector((state: RootState) => state.quote.quotes);
    const quote = useSelector((state: RootState) => state.quote.qotd);
    const quoteTime = useSelector((state: RootState) => state.quote.quoteTime);

    const dispatch = useDispatch();

    if(Date.now() > quoteTime + 1000 * 60 * 60 * 24) {
        SyncQuotes();
        const newQuote = quotes[Math.ceil(Math.random() * quotes.length) - 1]
        dispatch(setQOTD(newQuote));
    }

    const styles = QuoteBannerStyles();

    return <Card variant='outlined' className={styles.banner}>
            <CardHeader title={!!quote?.quote ? quote?.quote : "NO QUOTE"} subheader={!!quote?.author ? quote?.author : "NO AUTHOR"} className={styles.content}/>
        </Card>
};

export default QuoteBanner;