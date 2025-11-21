function displayWeather() {

  const btn = document.getElementById("search-btn");
  const tempInC = document.getElementById("tempDisplay");

  btn.addEventListener("click", async () => {
    try {
      const cityInput = document.getElementById("city-input").value.toLowerCase().trim();
      let result = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=d7cf1856550e40cb9c5230035252111&q=${cityInput}&aqi=no`
      );

      if (!result.ok) {
        throw new Error("Cant look for that place");
      }

      let data = await result.json();
      let cityTemp = data.current.temp_c;

      tempInC.textContent = `${cityTemp}°C`;

    } catch (error) {
      console.log(error);
    }
  });
}

displayWeather();
