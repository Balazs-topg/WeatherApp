//API Key: 9f98e1ed40d24c118f4192729232004

//https://api.weatherapi.com/v1/current.json?key=9f98e1ed40d24c118f4192729232004&q=london

const searchBox = document.querySelector("#searchbox");
const degreesDisplay = document.querySelector("#degrees");
const errorMessageDisplay = document.querySelector("#errorMessage");

searchBox.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    getWetherData(searchBox.value);
  }
});
getWetherData("älmhult");

async function getWetherData(location) {
  try {
    errorMessageDisplay.classList.add("hidden");
    let request = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=9f98e1ed40d24c118f4192729232004&q=${location}`
    );
    let json = await request.json();
    console.log(json.current.temp_c);

    degreesDisplay.innerHTML = json.current.temp_c + "°C";
  } catch (error) {
    errorMessageDisplay.textContent = `please enter a valid locaton, ${location} is not valid`;
    errorMessageDisplay.classList.remove("hidden");
  }
}