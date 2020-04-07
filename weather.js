class Weather {
  constructor(city, state) {
    this.apiKey = '05203a8661c044d189e7568e15a0cf66';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`);

    

    const responseData = await response.json();
    
    
    
     return responseData;


    
  }

  // Change weather location
  changeLocation(city, state ) {
    this.city = city;
    this.state = state;
  }
}