import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const Listeners = () => {
  const [data, setData] = useState([{}]);

  const GetTotalListener = (e) => {
    // const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/getTotal")
        .then((response) => response.json())
        .then((data) => setData(data));
      // .then(JSON.stringify(data.result));
    }, []);
  };

  const GetPercentageListener = (e) => {
    // const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/getPercentage")
        .then((response) => response.json())
        .then((data) => setData(data));
      // .then(JSON.stringify(data.result));
    }, []);
  };

  const GetJan2029listener = (e) => {
    // const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/getJan2029")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
  };

  const ShowList = (e) => {
    // const [data, setData] = useState([{}]);

    useEffect(() => {
      fetch("/showList")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
  };

  return (
    <div>
      <p>{JSON.stringify(data.result)}</p>

      <Button
        variant="contained"
        color="primary"
        onClick={GetTotalListener}
        fullWidth
      >
        get_Total
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={GetPercentageListener}
        fullWidth
      >
        get_Percentage
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={GetJan2029listener}
        fullWidth
      >
        get_Jan2029
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={GetJan2029listener}
        fullWidth
      >
        show_List
      </Button>
    </div>
  );
};
export default Listeners;
