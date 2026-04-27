import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Home = () => {
  const { weather, setWeather, history, setHistory } = useContext(WeatherContext);

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await res.json();

        const result = {
          city,
          temp: data.current_condition[0].temp_C,
          desc: data.current_condition[0].weatherDesc[0].value
        };

        setWeather(result);
        setHistory([result, ...history]);

      } catch (err) {
        setError("Error fetching weather");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        className="input"
        onChange={(e) => setCity(e.target.value)}
      />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.city}</h2>
          <p>{weather.temp}°C</p>
          <p>{weather.desc}</p>
        </div>
      )}
    </div>
  );
};

export default Home;