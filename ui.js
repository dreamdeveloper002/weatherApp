

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(results) {
    this.location.textContent = `${results.data[0].state_code}, ${results.data[0].city_name}`;
    this.desc.textContent = results.data[0].weather.description;
    this.string.textContent =`${results.data[0].temp}°C`;
    this.humidity.textContent = `Date Time: ${results.data[0].datetime}`;
    this.feelsLike.textContent = `Relative Humidity: ${results.data[0].rh}%`;
    this.dewpoint.textContent = `Clouds: ${results.data[0].clouds}%`;
    this.wind.textContent = `Wind Direction: ${results.data[0].wind_cdir}`;
  }
}