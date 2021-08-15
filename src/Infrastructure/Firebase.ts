import { useFirestore, useFirestoreDocData } from 'reactfire';
import { Quote } from '../Redux/Slices/quoteSlice';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

const FetchQuotes = () => {
    const quotesRef = useFirestore()
        .collection('qotd')
        .doc('quotes');

    const {status, data} = useFirestoreDocData<{quotes: Quote[]}>(quotesRef);

    let quotes : Quote[] = [];

    if(status !== 'loading') {
        quotes = data.quotes;
    }

    return quotes;
}

export default FetchQuotes;