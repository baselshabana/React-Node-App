import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  // const [janList, setJanList] = useState([{}]);
  const [data, setData] = useState([{}]);
  // const [percentage, setPercentage] = useState([{}]);

  useEffect(() => {
    fetch("/getPrecentage")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(data.percentage)}</p>
      </header>
    </div>
  );
}

export default App;
