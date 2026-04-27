// import { useState, useEffect } from "react";

// const History = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("history")) || [];
//     setHistory(data);
//   }, []);

//   return (
//     <div>
//       <h1>Search History</h1>

//       {history.length === 0 && <p>No history</p>}

//       {history.map((item, index) => (
//         <p key={index}>
//           {item.city} - {item.temp}°C - {item.desc}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default History;
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const History = () => {
  const { history } = useContext(WeatherContext);

  return (
    <div>
      <h1>Search History</h1>

      {history.length === 0 && <p>No history</p>}

      {history.map((item, index) => (
        <div key={index} className="card">
          {item.city} - {item.temp}°C - {item.desc}
        </div>
      ))}
    </div>
  );
};

export default History;