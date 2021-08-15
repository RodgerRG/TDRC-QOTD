import React from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';

export const firebaseConfig = {

  }

const SyncQuotes = () => {
    const quotesRef = useFirestore()
        .collection('qotd')
        .doc('quotes');

    const { data } = useFirestoreDocData(quotesRef);

    return data;
}

export default SyncQuotes;