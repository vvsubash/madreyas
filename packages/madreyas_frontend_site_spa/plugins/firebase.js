import firebase from 'firebase/app'

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.NUXT_ENV_APIKEY,
  authDomain: process.env.NUXT_ENV_AUTHDOMAIN,
  databaseURL: process.env.NUXT_ENV_DATABASEURL,
  projectId: process.env.NUXT_ENV_PROJECTID,
  storageBucket: process.env.NUXT_ENV_STORAGEBUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGINGSENDERID,
  appId: process.env.NUXT_ENV_APPID,
})
