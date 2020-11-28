// ACTION FOR BREED NAMEES
export const fetchBreedNames = () => {
  return { type: "FETCH_BREED_NAMES" };
};

export const setBreedNames = (breedNames = null) => {
  if (breedNames) {
    return {
      type: "SET_BREED_NAMES",
      payload: breedNames,
    };
  }
};

//  ACTION FOR BREED IMAGES
export const fetchBreedImages = (imgdata) => {
  return { type: "FETCH_BREED_IMAGES", payload: imgdata };
};

export const setBreedImages = (breedImg = null) => {
  if (breedImg) {
    return {
      type: "SET_BREED_IMAGES",
      payload: breedImg,
    };
  }
};
