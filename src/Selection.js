function Selection() {
  return (
    <form>
      <legend>Filters</legend>
      <input
        checked
        type="radio"
        name="animalType"
        id="all"
        value="all"
      ></input>
      <label for="all">Show All</label>
      <input type="radio" name="animalType" id="bear" value="bear"></input>
      <label for="bear">Bear</label>
      <input
        type="radio"
        name="animalType"
        id="dolphin"
        value="dolphin"
      ></input>
      <label for="dolphin">Dolphin</label>
      <input type="radio" name="animalType" id="duck" value="duck"></input>
      <label for="duck">Duck</label>
      <input type="radio" name="animalType" id="frog" value="frog"></input>
      <label for="frog">Frog</label>
    </form>
  );
}

export default Selection;
