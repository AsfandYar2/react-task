import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBreedNames } from "../../actions/dogsBreed";
import DogBreedItems from "./DogsBreedItem";

const DogsBreedName = ({ fetchBreedNames, data }) => {
  useEffect(() => {
    fetchBreedNames();
  }, [fetchBreedNames]);
  return (
    <div style={{ textAlign: "center", color: "blue" }}>
      <h2>Hello,Choose a Breed to View its Images</h2>
      <DogBreedItems data={data} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.dogsBreed.dogsBreedNames,
});

export default connect(mapStateToProps, { fetchBreedNames })(DogsBreedName);
