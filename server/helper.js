const { json } = require("express");

function getJan2029(body) {
  var result = [];
  var list = JSON.parse(body);

  for (let i = 0; i < list.length; i++) {
    if (list[i].date == "Amazon") {
    }
  }
  return result;
}

function setBAFlag(body) {
  var list = JSON.parse(body);

  for (let i = 0; i < list.length; i++) {
    if (
      list[i].merchant_name == "Amazon" ||
      list[i].merchant_name == "Washington Post" ||
      list[i].merchant_name == "Whole Foods" ||
      list[i].merchant_name == "Blue Origin"
    ) {
      list[i].bezosAffiliated = true;
    } else {
      list[i].bezosAffiliated = false;
    }
  }

  return list;
}

function getTotal(body) {
  var list = setBAFlag(body);

  var total = 0.0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].bezosAffiliated == true) {
      total += list[i].amount;
    }
  }
  return total;
}

function getPrecentage(body) {
  var total = getTotal(body);
  var list = JSON.parse(body);

  var grandTotal = 0.0;
  for (let i = 0; i < list.length; i++) {
    grandTotal += list[i].amount;
  }

  return (total / grandTotal) * 100;
}

module.exports = { getJan2029, getTotal, getPrecentage };
