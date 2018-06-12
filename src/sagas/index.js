import { fork } from "redux-saga/effects";
import burger from "./Burger"

export default function* () {
  yield fork(burger);
}