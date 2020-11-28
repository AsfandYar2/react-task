import { all } from "redux-saga/effects";
import { waitForFetchBreedName } from "./sagas/dogsBreedNamesSaga";
import { waitForFetchBreedImg } from "./sagas/dogsBreedImagesSaga";

export default function* index() {
  yield all([waitForFetchBreedName(), waitForFetchBreedImg()]);
}
