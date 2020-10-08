import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import { addDays } from 'date-fns'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://saveechi99.firebaseio.com",
});
const db = admin.firestore();

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
  .document('users/{userId}/animals/{animal}')
  .onWrite((change, context) => {

    if (change.after.data().state !== change.before.data().state) {

      const docRef = db.collection('users').doc(context.params.userId).collection('animals').doc(context.params.animal)


      switch (change.after.data().state) {
        case 'justCalved':
          docRef.set({
            whenCanSheBeInseminated: new Date(addDays(change.after.data().dateOfRecentCalving.toDate(), 77))
          }, { merge: true })
          break;
        case 'inseminated':
          docRef.set({
            check1: {
              date: new Date(addDays(change.after.data().inseminatedOn.toDate(), 18)),
              isPassed: null
            },
            check2: {
              date: new Date(addDays(change.after.data().inseminatedOn.toDate(), 90)),
              isPassed: null
            },
            check3: {
              date: new Date(addDays(change.after.data().inseminatedOn.toDate(), 180)),
              isPassed: null
            }
          }, { merge: true })
          break;
        case 'dried':
          docRef.set({
            dateToCheckForEdema: new Date(addDays(change.after.data().inseminatedOn.toDate(), 272)),
            expectedDateOfCalving: new Date(addDays(change.after.data().inseminatedOn.toDate(), 279)),
          }, { merge: true })
          break;
        default:
          break;
      }
    }
  });