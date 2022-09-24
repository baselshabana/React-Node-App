/* helpler functions for the backend* /

/**
 *this helper function takes the response body as a whole, and returns it as an array of JSON
 *params: response body
 *returns: an array of JSON
 */
function tolist(body) {
  return JSON.parse(body);
}

/**
 *this function takes the response body as a whole, coverts it to a list, add & initialize a boolean flag for each element in the list
 *params: response body
 *returns: a list with a new boolean flag bezosAffiliated
 */
function setBAFlag(body) {
  var list = tolist(body);

  //loop for every object in the list
  //if merchant_name = "JB's company" --> set flag true
  // else --> set flag false
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
  //return the new list (the one containing the flag)
  return list;
}

/**
 *this function takes the response body as a whole and calculates the total amount spent on JB affiliated companies
 *params: response body
 *returns: total amount spent on JB affiliated companies
 */
function getTotal(body) {
  //call setBAFlag() to set the new boolean flag
  var list = setBAFlag(body);

  var total = 0.0;
  for (let i = 0; i < list.length; i++) {
    //calculating the total amount
    if (list[i].bezosAffiliated == true) {
      //adding up every amount whenever the boolean flag "bezosAffiliated" is true.
      total += list[i].amount;
    }
  }
  //return the total amount spent on JB
  return total;
}

/**
 *this function takes the response body as a whole,
 *params: response body
 *returns: total amount spent on JB affiliated companies as a percentage
 */
function getPercentage(body) {
  var list = tolist(body);

  //getting the total amount spent on JB
  var total = getTotal(body);

  var grandTotal = 0.0;
  for (let i = 0; i < list.length; i++) {
    //caculating grand total
    grandTotal += list[i].amount;
  }

  //percentage = total / grandTotal * 100
  return (total / grandTotal) * 100;
}

/**
 *this function takes the response body as a whole and returns a list of Ahmed transations in Jan 2029 ordered by date
 *params: response body
 *returns: an ordered list
 */
function getJan2029(body) {
  var list = tolist(body);
  var result = [];

  for (let i = 0; i < list.length; i++) {
    var tempDate = list[i].date;
    if (
      tempDate[2] == "2" &&
      tempDate[3] == "9" &&
      tempDate[5] == "0" &&
      tempDate[6] == "1"
    ) {
      result[i] = list[i];
    }
  }
  return result;
}

/**
 *this function takes the response body as a whole and
 *params: response body, merchant_name to be marked/unmarked
 *returns: updated list of transactions
 */
function markTransaction(body, merchantName) {
  var list = setBAFlag(body);
  var unMark = false;

  //for loop to unmark
  for (let i = 0; i < list.length; i++) {
    if (
      list[i].merchant_name == merchantName &&
      list[i].bezosAffiliated == true
    ) {
      list[i].bezosAffiliated = false;
      unMark = true;
    }
  }

  //if called for unmark --> skip marking
  if (unMark) {
    return list;
  } else {
    //for loop to mark
    for (let i = 0; i < list.length; i++) {
      if (list[i].merchant_name == merchantName) {
        list[i].bezosAffiliated = true;
      }
    }
  }

  return list;
}

module.exports = {
  getJan2029,
  getTotal,
  getPercentage,
  setBAFlag,
  markTransaction,
};
