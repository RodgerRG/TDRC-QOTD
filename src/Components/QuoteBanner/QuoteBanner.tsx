import { Button, Card, CardHeader, CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchQuotes, { FetchBirthdays } from "../../Infrastructure/Firebase";
import { clearQuote, Quote, setQOTD, setQuotes } from "../../Redux/Slices/quoteSlice";
import { RootState } from "../../Redux/Stores/rootStore";
import QuoteBannerStyles from "./QuoteBannerStyles";

const QuoteBanner = () : JSX.Element => {
    const quotes = useSelector((state: RootState) => state.quote.quotes);
    const quote = useSelector((state: RootState) => state.quote.qotd);
    const quoteTime = useSelector((state: RootState) => state.quote.quoteTime);
    const dispatch = useDispatch();
    
    const fbQuotes = FetchQuotes();
    const fbBirthdays = FetchBirthdays();
    const [birthdayName, setBirthday] = useState('');

    useEffect(() => {
        if(quotes.length === 0) dispatch(setQuotes(fbQuotes));

        if(fbBirthdays.length > 0) {
            let newQuotes : Quote[] = [];
            fbBirthdays.forEach(birthday => {
                let today = new Date(Date.now());
                let birthDate = new Date(birthday.date.seconds * 1000);

                if(birthdayName.length === 0 && birthDate.getMonth() === today.getMonth() && birthDate.getDate() === today.getDate()) {
                    setBirthday(birthday.friendlyName);
                    quotes.forEach(quote => {
                        if(quote.author === birthday.name) {
                            newQuotes.push(quote);
                        }
                    });

                    dispatch(setQuotes(newQuotes));
                    dispatch(clearQuote());

                    const newQuote = newQuotes[Math.ceil(Math.random() * newQuotes.length) - 1]
                    dispatch(setQOTD(newQuote));
                    return;
                }
            })

            dispatch(setQuotes(fbQuotes));
        }

        if(quotes.length > 0 && Date.now() > quoteTime + 1000 * 60 * 60 * 24) {
            const newQuote = quotes[Math.ceil(Math.random() * quotes.length) - 1]
            dispatch(setQOTD(newQuote));
        }
    }, [dispatch, fbQuotes, quoteTime, quotes, fbBirthdays, birthdayName]);

    const styles = QuoteBannerStyles();

    const quoteCard = <div className={styles.cardWrapper}>
        <Card variant='outlined' className={styles.card}>
            <CardHeader title={`"${quote!.quote}"`} 
            subheader={`- ${quote!.author}`} 
            className={styles.content}
            titleTypographyProps={{className: styles.cardTitle}}
            subheaderTypographyProps={{className: styles.cardName}}/>
        </Card>
    </div>;

    if(!quote) return <CircularProgress />

    if(birthdayName.length > 0) return <div className={styles.banner}>
            <Typography variant='h1' className={styles.birthdayHeader}>
                Happy Birthday {birthdayName}!
            </Typography>
            {quoteCard}
        </div>

    return quoteCard;
};

export default QuoteBanner;