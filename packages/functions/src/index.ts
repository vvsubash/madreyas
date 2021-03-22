import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { addDays } from "date-fns";
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
export const updateCowStateInDoc = functions
  .region("asia-south1")
  .firestore.document("users/{userId}/animals/{animal}")
  .onWrite((change, context) => {
    const docRef = db
      .collection("users")
      .doc(context.params.userId)
      .collection("animals")
      .doc(context.params.animal);

    switch (change.after.data().state) {
      case "justCalved":
        docRef.set(
          {
            whenCanSheBeInseminated: new Date(
              addDays(change.after.data().dateOfRecentCalving.toDate(), 77)
            ),
          },
          { merge: true }
        );
        break;
      case "inseminated":
        docRef.set(
          {
            check1: {
              date: new Date(
                addDays(change.after.data().inseminatedOn.toDate(), 18)
              ),
              isPassed: null,
            },
            check2: {
              date: new Date(
                addDays(change.after.data().inseminatedOn.toDate(), 90)
              ),
              isPassed: null,
            },
            check3: {
              date: new Date(
                addDays(change.after.data().inseminatedOn.toDate(), 180)
              ),
              isPassed: null,
            },
          },
          { merge: true }
        );
        break;
      case "dried":
        docRef.set(
          {
            dateToCheckForEdema: new Date(
              addDays(change.after.data().inseminatedOn.toDate(), 272)
            ),
            expectedDateOfCalving: new Date(
              addDays(change.after.data().inseminatedOn.toDate(), 279)
            ),
          },
          { merge: true }
        );
        break;
      default:
        break;
    }

  });

// export const verifyPhoneNumber = functions
//   .region("asia-south1")
//   .https.onCall((data) => {
//     const phoneNumber = data.phoneNumber;
//     const accountSid = functions.config().twilio.account_sid;
//     const authToken = functions.config().twilio.auth_token;
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const client = Twilio(accountSid, authToken);

//     client.verify
//       .services("VA0292b704fc848266b2e6d808eccded2f")
//       .verifications.create({ to: phoneNumber, channel: "sms" })
//       .then((verification: { status: any }) =>
//         console.log(verification.status)
//       );
//   });


export const everyDayMsg = functions.pubsub.schedule('5 11 * * *').timeZone('Asia/Kolkata').onRun(() => {
  db.collection("users").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    })
})