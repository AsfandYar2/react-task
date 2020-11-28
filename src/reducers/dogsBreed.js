const initialState = {
  dogsBreedNames: {},
  dogsBreedImages: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_BREED_NAMES":
      return {
        ...state,
        dogsBreedNames: { ...payload },
      };
    case "SET_BREED_IMAGES":
      return {
        ...state,
        dogsBreedImages: { ...payload },
      };

    default:
      return state;
  }
}
