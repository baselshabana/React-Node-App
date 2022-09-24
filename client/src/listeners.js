import { Button } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// const [data, setData] = useState([{}]);

const Listeners = () => {
  const GetTotalListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/getTotal", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  const GetPercentageListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/getPercentage", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  const GetJan2029listener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/getJan2029", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  const ShowListListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/showList", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  const MarkTransactionListener = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("http://localhost:8080/markTransaction", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
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
