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

//to get Ahmed's transactions list after adding the boolean flag
//this is allow Ahmed to visually discern which transactions are to known Bezos-related companies
app.get("/showList", (req, res) => {
  var list = helper.setBAFlag(body);
  res.json({ result: list });
  // console.log(list);
});

//to get Ahmed JB affiliated transactions' total amount as a value
app.get("/getTotal", (req, res) => {
  var total = helper.getTotal(body);
  res.json({ result: total });
  // console.log(total);
});

//to get Ahmed JB affiliated transactions' total amount as a percentage of the total
app.get("/getPercentage", (req, res) => {
  var percentage = helper.getPercentage(body);

  //round "percentage" to 2 decimal places
  percentage = percentage.toFixed(2);
  res.json({ result: percentage + "%" });
  // console.log(percentage);
});

//to get Ahmed's transactions for Jan2029
app.get("/getJan2029", (req, res) => {
  var list = helper.getJan2029(body);
  res.json({ result: list });
  // console.log(list);
});

//to mark/unmark any transaction as being Bezos-related
app.get("/markTransaction", (req, res) => {
  var merchantName = req.query.merchantName;
  var list = helper.markTransaction(body, merchantName);
  res.json({ result: list });
  // console.log(list);
});
