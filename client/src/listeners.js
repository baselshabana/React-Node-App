import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";


const Listeners = () => {

  const GetTotalListener = (e) => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/getTotal")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
   
  };

  const GetPercentageListener = (e) => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/getPrecentage")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
   
  };

  const GetJan2029listener = (e) => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/getJan2029")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
   
  };

  return (
    <div>
        
        <Button
          variant="contained"
          color="primary"
          onClick={GetTotalListener}
          fullWidth
        >
          getTotal
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={GetPercentageListener}
          fullWidth
        >
          GetPercentage
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={GetJan2029listener}
          fullWidth
        >
          getJan2029
        </Button>
      </div>
  );
};
export default Listeners;
