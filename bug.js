The Firebase SDK might throw an error if you try to access a property of a document snapshot before the promise resolves.  This often happens when you're asynchronously fetching data and trying to use it immediately without waiting for the `then()` or `await` method to complete.  For example:

```javascript
const docRef = doc(db, 'collection', 'docId');
const docSnap = await getDoc(docRef);
console.log(docSnap.data().someField); // Error if not resolved
```

This might not always throw a standard error message making it difficult to debug.  The application might just not work as expected or it may throw a TypeError or undefined error.