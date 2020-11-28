import { takeEvery, call, put } from "redux-saga/effects";

import { setBreedNames } from "../actions/dogsBreed";
import * as API from "../services/API";

function* fetchBreedName() {
  try {
    const breed = yield call(API.fetchBreedName);
    console.log(breed);
    yield put(setBreedNames(breed.message));
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForFetchBreedName() {
  yield takeEvery("FETCH_BREED_NAMES", fetchBreedName);
}
