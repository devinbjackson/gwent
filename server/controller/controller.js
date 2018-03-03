axios = require("axios");

module.exports = {
    getAllCards: (req, res, next) => {
        console.log('getAllCards hit')
        const dbInstance = req.app.get('db');
        dbInstance
          .get_all_cards()
          .then(questions => res.status(200).json(questions))
          .catch(console.log);
    }
  };