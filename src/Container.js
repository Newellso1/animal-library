import React from "react";
import animals from "./Animals";
import AnimalCard from "./AnimalCard";

function Container() {
  return (
    <div>
      {animals.map(
        (animal) =>
          animal.name === "bear" && (
            <AnimalCard src={animal.src} alt={animal.alt} />
          )
      )}
    </div>
  );
}

export default Container;
