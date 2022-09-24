const helper = require("./helper");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const requestify = require("requestify");

////////////////////////////////////////////////////////////////////////////////////
//Setting up the project
////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//getting the response from "https://oaosman84.github.io/statics/mock_transaction_data"
//store the response to the variable "body"
var body = [];
requestify
  .request("https://oaosman84.github.io/statics/mock_transaction_data", {
    method: "GET",
  })
  .then(function (response) {
    body = response.getBody();
  })
  .fail(function (response) {
    console.log("Response Error", response.getCode());
  });

////////////////////////////////////////////////////////////////////////////////////
//APIs
////////////////////////////////////////////////////////////////////////////////////

app.get("/getJan2029", (req, res) => {
  var list = helper.getJan2029(body);
  res.json({ list: list });
});

app.get("/getTotal", (req, res) => {
  var total = helper.getTotal(body);
  res.json({ total: total });
});

app.get("/getPercentage", (req, res) => {
  var percentage = helper.getPercentage(body);
  res.json({ percentage: percentage });
});
