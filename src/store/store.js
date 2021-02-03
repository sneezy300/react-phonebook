import { createStore, compose, applyMiddleware } from 'redux';
import usersReducer from '../reducers/usersReducer';

//New imports
import firebase from "../firebase/firebase";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";

export const store = createStore(usersReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase)
    ));

