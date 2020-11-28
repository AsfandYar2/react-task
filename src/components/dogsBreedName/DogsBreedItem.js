import React from "react";
import { Link } from "react-router-dom";

const DogBreedItems = ({ data }) => {
  const objArray = [];
  Object.keys(data).forEach((key) =>
    objArray.push({
      name: key,
      surname: data[key],
    })
  );

  return (
    <div>
      {objArray.map((a) => (
        <div>
          <Link to={`/showDogImage/${a.name}`}>
            {a.name}
            {a.surname.length > 0 &&
              a.surname.map((sur) => (
                <div>
                  <Link to={`/showDogImage/${a.name}/${sur}`}>{sur}</Link>
                </div>
              ))}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogBreedItems;
