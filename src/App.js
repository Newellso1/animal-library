import { useState } from "react";
import "./App.css";

const animals = [
  {
    name: "bear",
    src: "https://images.pexels.com/photos/158109/kodiak-brown-bear-adult-portrait-wildlife-158109.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Brown Bear on a Body of Water",
  },

  {
    name: "bear",
    src: "https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    alt: "Brown Bear",
  },
  {
    name: "bear",
    src: "https://images.pexels.com/photos/1068554/pexels-photo-1068554.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Close-Up Photography of Grizzly Bear",
  },
  {
    name: "bear",
    src: "https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Grayscale Photo of a Polar Bear Cub",
  },
  {
    name: "bear",
    src: "https://images.pexels.com/photos/1466592/pexels-photo-1466592.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350",
    alt: "Grizzly Bear Walking Beside Pond",
  },
  {
    name: "dolphin",
    src: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Cute Dolphin Underwater",
  },
  {
    name: "dolphin",
    src: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?",
    alt: "Photo of Pod of Dolphins",
  },
  {
    name: "dolphin",
    src: "https://images.pexels.com/photos/994473/pexels-photo-994473.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350",
    alt: "Photography of Body of Water",
  },
  {
    name: "dolphin",
    src: "https://images.pexels.com/photos/1986374/pexels-photo-1986374.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Gray Dolphin on Body of Water",
  },
  {
    name: "dolphin",
    src: "https://images.pexels.com/photos/225869/pexels-photo-225869.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Adorable Dolphins on Surface of Water",
  },
  {
    name: "duck",
    src: "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Duckling on Black Soil during Daytime",
  },
  {
    name: "duck",
    src: "https://images.pexels.com/photos/221429/pexels-photo-221429.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350",
    alt: "Black and Gray Duck on Body of Water",
  },
  {
    name: "duck",
    src: "https://images.pexels.com/photos/2294541/pexels-photo-2294541.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350",
    alt: "Gray and Green Duck Wading ",
  },
  {
    name: "duck",
    src: "https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Depth of Field Photography of Mallard Duck on Body of Water",
  },
  {
    name: "duck",
    src: "https://images.pexels.com/photos/209035/pexels-photo-209035.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Brown White and Blue Duck",
  },
  {
    name: "frog",
    src: "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Green Frog",
  },
  {
    name: "frog",
    src: "https://images.pexels.com/photos/76957/tree-frog-frog-red-eyed-amphibian-76957.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Green Blue Yellow and Orange Frog on Green Leaf",
  },
  {
    name: "frog",
    src: "https://images.pexels.com/photos/45863/frog-butterfly-pond-mirroring-45863.jpeg?auto=compress&cs=tinysrgb&h=350",
    alt: "Macro Photography of Green Frog",
  },
  {
    name: "frog",
    src: "https://images.pexels.com/photos/3180755/pexels-photo-3180755.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350",
    alt: "Selective Focus Photo of Red and Blue Frog on Ground",
  },
  {
    name: "frog",
    src: "https://images.pexels.com/photos/63650/frog-toad-eyes-animal-63650.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350",
    alt: "Orange and Black Frog",
  },
];

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAnimalChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  // let searchText = "Showing ";

  // if (selectedAnimal === "all") {
  //   searchText += "All animals";
  // } else {
  //   searchText += selectedAnimal;
  // }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Animal Library</h1>
      <Selection
        selectedAnimal={selectedAnimal}
        onChange={handleAnimalChange}
        onSearchChange={handleSearchChange}
      />
      {/* <p>{`Searching for: ${searchQuery} and ${selectedAnimal}`}</p> */}
      <p>
        {searchQuery
          ? `Searching for  ${searchQuery} and ${selectedAnimal}`
          : `Searching for ${selectedAnimal}`}
      </p>
      <Container selectedAnimal={selectedAnimal} searchQuery={searchQuery} />
    </div>
  );
}

function Container({ selectedAnimal, searchQuery }) {
  return (
    <div>
      {animals
        .filter(
          (animal) =>
            (selectedAnimal === "all" || animal.name === selectedAnimal) && // Filter by selected animal
            (searchQuery === "" ||
              animal.alt.toLowerCase().includes(searchQuery.toLowerCase())) // Filter by search query
        )
        .map((animal) => (
          <AnimalCard key={animal.src} src={animal.src} alt={animal.alt} />
        ))}
    </div>
  );
}

function AnimalCard(props) {
  return <img src={props.src} alt={props.alt}></img>;
}

function Selection({ selectedAnimal, onChange, searchQuery, onSearchChange }) {
  return (
    <form>
      <fieldset>
        <legend>Filters</legend>
        <input
          type="radio"
          name="animalType"
          id="all"
          value="all"
          checked={selectedAnimal === "all"}
          onChange={onChange}
        />
        <label htmlFor="all">Show All</label>
        <input
          type="radio"
          name="animalType"
          id="bear"
          value="bear"
          checked={selectedAnimal === "bear"}
          onChange={onChange}
        />
        <label htmlFor="bear">Bear</label>
        <input
          type="radio"
          name="animalType"
          id="dolphin"
          value="dolphin"
          checked={selectedAnimal === "dolphin"}
          onChange={onChange}
        />
        <label htmlFor="dolphin">Dolphin</label>
        <input
          type="radio"
          name="animalType"
          id="duck"
          value="duck"
          checked={selectedAnimal === "duck"}
          onChange={onChange}
        />
        <label htmlFor="duck">Duck</label>
        <input
          type="radio"
          name="animalType"
          id="frog"
          value="frog"
          checked={selectedAnimal === "frog"}
          onChange={onChange}
        />
        <label htmlFor="frog">Frog</label>
      </fieldset>
      <label for="search">Search</label>
      <input
        type="search"
        name="search"
        id="search"
        value={searchQuery}
        onChange={onSearchChange}
      ></input>
    </form>
  );
}

export default App;
