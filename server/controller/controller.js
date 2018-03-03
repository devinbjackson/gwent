axios = require("axios");

module.exports = {
    getCards: (req, res, next) => {
     console.log("hi")
     axios.get("https://api.gwentapi.com/v0").then((response)=>res.status(200).json(response))
     //axios.get("http://localhost:3001/api/paySuccess").then(response => history.push("/"));
    }
  };