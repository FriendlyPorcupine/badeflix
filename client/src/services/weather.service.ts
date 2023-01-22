export interface WeatherData {
  temperature: number;
  sunset: number;
}

export const fetchWeatherData = async (city: string) => {
  const weatherRes = await fetch(
    'http://localhost:3000/v1/weather/city?' + new URLSearchParams({ city }),
<<<<<<< HEAD
    {
      credentials: 'include',
    },
=======
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d
  );

  if (!weatherRes.ok) {
    return undefined;
<<<<<<< HEAD
=======
    //throw new Error('Failed to fetch weather');
>>>>>>> 4e1922e47a5bf0e7a7483f4243d9d7df1759a66d
  }

  const weather: WeatherData = await weatherRes.json();
  return weather;
};
