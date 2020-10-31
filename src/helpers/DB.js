import { firestore } from '../helpers/Firebase'

export const usersDataCollection = firestore.collection("users");