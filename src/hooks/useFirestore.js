import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]); //docs = images

    useEffect(() => {
        const unsub = projectFirestore.collection(collection).orderBy("createdAt", "desc").onSnapshot((snap) => { // we listening to real data updates here
            let documents = [];
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id })
            });
            setDocs(documents);

        });
        return () => unsub(); //unsubscrib when we no more use 

    }, [collection])

    return { docs };

}

export default useFirestore;