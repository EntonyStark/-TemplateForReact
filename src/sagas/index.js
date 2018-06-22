import { fork } from "redux-saga/effects";
import burger from "./Burger";
import auth from "./Auth";

export default function* () {
  yield fork(burger);
  yield fork(auth);
}