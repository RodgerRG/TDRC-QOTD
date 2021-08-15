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

export interface Birthday {
    date: {
        seconds: number,
        nanoseconds: number
    },
    name: string,
    friendlyName: string
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

export const FetchBirthdays = () => {
    const birthdaysRef = useFirestore()
        .collection('qotd')
        .doc('birthdays')
    
    const {status, data} = useFirestoreDocData<{birthdays: Birthday[]}>(birthdaysRef);

    let birthdays : Birthday[] = [];

    if(status !== 'loading') {
        birthdays = data.birthdays;
    }
    
    return birthdays;
}

export default FetchQuotes;