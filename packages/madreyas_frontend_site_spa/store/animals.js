// // eslint-disable-next-line no-unused-vars
// import * as firebase from 'firebase/app'
// import 'firebase/firestore'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db, auth } from '../plugins/firebase'
export const state = () => ({
  animalsList: [],
})

export const getters = {
  getterValue: (state) => {
    return state.value
  },
  getTheAnimal: (state) => (route) => {
    return state.animalsList.find((x) => {
      return x.name === route
    })
  },
}

export const mutations = {
  ...vuexfireMutations,
}

export const actions = {
  getAnimals: firestoreAction(({ rootState, bindFirestoreRef }) => {
    bindFirestoreRef(
      'animalsList',
      db.collection(`users/${auth.currentUser.uid}/animals`),
    )
  }),
}
