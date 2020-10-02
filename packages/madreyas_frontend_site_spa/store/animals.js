// // eslint-disable-next-line no-unused-vars
// import * as firebase from 'firebase/app'
// import 'firebase/firestore'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../plugins/firebase'
export const state = () => ({
  animalsList: [],
})

export const getters = {
  getterValue: (state) => {
    return state.value
  },
}

export const mutations = {
  ...vuexfireMutations,
}

export const actions = {
  getCows: firestoreAction(({ rootState, bindFirestoreRef }) => {
    bindFirestoreRef(
      'animalsList',
      db.collection(`users/${rootState.user.uid}/animals`),
    )
  }),
}
