import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// imopor Actions
import { fetchBreedImages } from "../../actions/dogsBreed";

import { useParams } from "react-router-dom";

const DogsBreedImages = ({ fetchBreedImages, data }) => {
  let { name, subname } = useParams();
  //   console.log(name);
  useEffect(() => {
    if (subname) name = `${name}/${subname}`;
    fetchBreedImages(name);
  }, []);
  return (
    <div>
      <h3>
        <Link to="/">Back to Breed Name</Link>
      </h3>
      <hr></hr>
      <h2 style={{ textAlign: "center" }}>
        Images of "{name}/{subname}" Breed{" "}
      </h2>
      {data ? (
        <div>
          {Object.values(data).map((a) => (
            <img
              src={a}
              alt={name}
              style={{
                width: "14%",
                height: "17vh",
                border: "2px solid black",
                margin: "10px",
              }}
            />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.dogsBreed.dogsBreedImages,
});

export default connect(mapStateToProps, { fetchBreedImages })(DogsBreedImages);
