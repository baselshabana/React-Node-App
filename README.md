# Please take a minute to read this file

Kindly note that this is not the final version of the project. However, because of time limitation and my commitment to other tasks (related to my current job), this is the outcome of my efforts.

#what's done:
-connectetivity establishment 
-calling "https://oaosman84.github.io/statics/mock_transaction_data" and parsing the response
-creating (fully functional and tested) 5 api's:
      getTotal
      getPercentage 
      getJan2029
      showList
      markTransaction
-creating 5 buttons and listeners to call the api's from the client
-client sends requests to the server and receive response successfully without catching any errors

#what's NOT done:
-displaying the response recieved from the server to the user in React components
-revamping for the frontend and UX
-adding unit testig scenarios

#Project outline:
/server:
        index.js -> backend logic (nodejs + express)
        helper.js -> helper functions for the api's

/client:
        index.js -> the route to the component contains the buttons
        listeners.js -> have the buttons and the listeners to call the backend api's
