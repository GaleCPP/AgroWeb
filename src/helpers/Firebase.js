import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/storage';

import {firebaseConfig} from '../constants/defaultValues'

firebase.initializeApp(firebaseConfig); // BuscarBaseDatos

const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();
const firestorage = firebase.storage();

export {
   auth,
   database,
   firestore,
   firestorage,
};
