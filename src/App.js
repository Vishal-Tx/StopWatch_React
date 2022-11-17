import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [watch, setWatch] = useState(0);
  const [isStop, setIsStop] = useState(false);
  const [lap, setLap] = useState([]);

  useEffect(() => {
    if (!isStop) {
      let interval = setInterval(() => {
        setWatch((prevValue) => prevValue + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isStop]);

  return (
    <div className="App">
      <p>{watch}</p>
      <button
        style={{ margin: "0 5px" }}
        onClick={() => setIsStop((prev) => !prev)}
      >
        {isStop ? "start" : "stop"}
      </button>
      <button
        style={{ margin: "0 5px" }}
        onClick={() => setLap((prevValue) => [...prevValue, watch])}
      >
        Lap
      </button>

      <ul>
        {lap.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
