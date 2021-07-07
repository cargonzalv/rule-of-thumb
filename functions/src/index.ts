import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getData = functions.https.onRequest((request, response) => {
  // Get a database reference to our data
  const db = admin.database();
  const ref = db.ref();
  ref.on('value', (snapshot) => {
    const data = snapshot.val().data;
    response.send(data);
  }, (error) => {
    console.error(error);
    response.send(error);
  });
});

export const updateData = functions.https.onRequest((request, response) => {
  // Get a database reference to our data
  const db = admin.database();
  const ref = db.ref();
  ref.set(JSON.parse(request.body), (error) => {
    if (error) {
      console.error(error);
      response.send(error);
    } else {
      response.send(request.body);
    }
  });
});
