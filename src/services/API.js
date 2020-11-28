import axios from "axios";

// GET BREED NAMES
export const fetchBreedName = (name) => {
  console.log(name);
  return axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.data);
};

//GET BREED IMAGES
export const fetchBreedImg = (breedname) => {
  console.log(breedname);
  return axios
    .get(`https://dog.ceo/api/breed/${breedname}/images`)
    .then((res) => res.data);
};
