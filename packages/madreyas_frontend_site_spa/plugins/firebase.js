import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/performance'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.NUXT_ENV_APIKEY,
  authDomain: process.env.NUXT_ENV_AUTHDOMAIN,
  databaseURL: process.env.NUXT_ENV_DATABASEURL,
  projectId: process.env.NUXT_ENV_PROJECTID,
  storageBucket: process.env.NUXT_ENV_STORAGEBUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGINGSENDERID,
  appId: process.env.NUXT_ENV_APPID,
  measurementId: process.env.NUXT_ENV_MEASUREMENTID,
})

firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })
const db = firebaseApp.firestore()
const auth = firebase.auth()
const authProvider = new firebase.auth.GoogleAuthProvider()

// export const perf = firebaseApp.performance()

export { db, auth, authProvider }
