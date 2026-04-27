import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  // load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, history, setHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;