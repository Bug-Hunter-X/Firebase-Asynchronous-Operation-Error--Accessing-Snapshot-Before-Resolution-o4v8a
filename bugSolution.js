The solution involves properly using async/await to ensure that the data is loaded before attempting to access it. Here's the corrected code:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  // ... your config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
  const docRef = doc(db, 'collection', 'docId');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().someField);
  } else {
    console.log("No such document!");
  }
}

getData();
```
This code uses `await` to pause execution until `getDoc` resolves, ensuring that `docSnap.data().someField` is not accessed before the data is available.  Error handling (checking `docSnap.exists()`) is also added for robustness.