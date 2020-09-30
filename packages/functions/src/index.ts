import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://saveechi99.firebaseio.com",
});
const db = admin.firestore();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});


export const useWildcard = functions.region('asia-south1')
  .firestore
  .document('users/{userId}/cows/{cow}')
  .onWrite((change, context) => {
    // If we set `/users/marie` to {name: "Marie"} then
    // context.params.userId == "marie"
    // ... and ...
    // change.after.data() == {name: "Marie"}
    console.log(change.after.data())
    console.log(context.params.userId)
  });
export const addUserOnSignUp = functions
  .region("asia-south1")
  .auth.user()
  .onCreate(async (user) => {
    const docRef = db.collection("users").doc(user.uid);
    await docRef.set({
      email: user.email,
      name: user.displayName,
      pic: user.photoURL,
    });
    console.log("completed");
  });
