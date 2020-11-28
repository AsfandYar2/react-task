import { takeEvery, call, put } from "redux-saga/effects";
import { setBreedImages } from "../actions/dogsBreed";

import * as API from "../services/API";

function* fetchBreedImg(action) {
  const { payload } = action;
  try {
    const breedImg = yield call(API.fetchBreedImg, payload);
    console.log(breedImg);
    yield put(setBreedImages(breedImg.message));
  } catch (e) {
    console.log(e, "error");
  }
}

export function* waitForFetchBreedImg() {
  yield takeEvery("FETCH_BREED_IMAGES", fetchBreedImg);
}
