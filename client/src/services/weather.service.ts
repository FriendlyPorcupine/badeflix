export interface WeatherData {
  temperature: number;
  sunset: number;
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const weatherRes = await fetch(
    'http://localhost:3000/v1/weather/city?' + new URLSearchParams({ city }),
  );

  if (!weatherRes.ok) {
    throw new Error('Failed to fetch weather');
  }

  const weather: WeatherData = await weatherRes.json();
  return weather;
};
