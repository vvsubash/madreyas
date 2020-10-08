import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db, auth } from '../plugins/firebase'
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
  getAnimals: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef(
      'animalsList',
      db.collection(`users/${auth.currentUser.uid}/animals`),
    )
  }),
}
