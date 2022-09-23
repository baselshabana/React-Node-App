import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [mockData, setMockData] = useState([{}]);

  useEffect(() => {
    fetch("https://oaosman84.github.io/statics/mock_transaction_data")
      .then((response) => response.json())
      .then((data) => {
        setMockData(data);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
