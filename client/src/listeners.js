import { Button } from "@material-ui/core";
// import React, { useEffect, useState } from "react";

const Listeners = () => {
  // const [data, setData] = useState([{}]);

  const GetTotalListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/getTotal", requestOptions).then(
      (response) => response.json()
    );
  };

  const GetPercentageListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/getPercentage", requestOptions).then(
      (response) => response.json()
    );
  };

  const GetJan2029listener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/getJan2029", requestOptions).then(
      (response) => response.json()
    );
  };

  const ShowListListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/showList", requestOptions).then(
      (response) => response.json()
    );
  };

  const MarkTransactionListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/markTransaction", requestOptions).then(
      (response) => response.json()
    );
  };

  return (
    <div>
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
        onClick={ShowListListener}
        fullWidth
      >
        show_List
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={MarkTransactionListener}
        fullWidth
      >
        Mark/Unmark
      </Button>
    </div>
  );
};
export default Listeners;
