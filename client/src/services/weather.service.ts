export interface WeatherData {
  temperature: number;
  sunset: number;
}

export const fetchWeatherData = async (city: string) => {
  const weatherRes = await fetch(
    'http://localhost:3000/v1/weather/city?' + new URLSearchParams({ city }),
    {
      credentials: 'include',
    },

  );

  if (!weatherRes.ok) {
    return undefined;
  }

  const weather: WeatherData = await weatherRes.json();
  return weather;
};
