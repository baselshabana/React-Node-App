import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [janList, setJanList] = useState([{}]);
  const [total, setTotal] = useState([{}]);
  const [percentage, setPercentage] = useState([{}]);

  useEffect(() => {
    fetch("/getTotal")
      .then((response) => response.json())
      .then((total) => {
        setTotal(total);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
