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
    console.log(change.after.data().state)
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
export const updateCowStateInDoc = functions.region('asia-south1')
  .firestore
  .document('users/{userId}/animals/{animal}/heatData/{newState}')
  .onWrite((change, context) => {
    const docRef = db.collection('users').doc(context.params.userId).collection('animals').doc(context.params.animal)

    switch (change.after.data().state) {
      case 'justCalved':
        docRef.set({
          state: 'justCalved'
        }, { merge: true })
        break;
      case 'inseminated':
        docRef.set({
          state: 'inseminated'
        }, { merge: true })
        break;
      case 'dried':
        docRef.set({
          state: 'dried'
        }, { merge: true })
        break;
      default:
        break;
    }
  });