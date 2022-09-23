const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const requestify = require("requestify");

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

requestify
  .request("https://oaosman84.github.io/statics/mock_transaction_data", {
    method: "GET",
  })
  .then(function (response) {
    console.log("responsebody", response.getBody());
    // console.log("responsebody RAW", response.body);
  })
  .fail(function (response) {
    console.log("Response Error", response.getCode());
  });