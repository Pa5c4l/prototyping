export async function fetchWeather() {
  // const apiKey = import.meta.env.PUBLIC_WEATHER_API_KEY;
  // const endpoint = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Otelfingen&lang=de`;
  const endpoint = `https://api.weatherapi.com/v1/current.json?key=6ad24e355706405fb9252044250106&q=Otelfingen&lang=de`;

  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Fehler beim Abrufen der Wetterdaten");
    }

  const data = await res.json();

  return {
    location: data.location.name,
    temp: data.current.temp_c,
    description: data.current.condition.text,
    icon: data.current.condition.icon,
    humidity: data.current.humidity,
    wind: data.current.wind_kph
  };
}