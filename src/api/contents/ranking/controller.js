const Ranking = require("./model");
const { literal } = require("sequelize");

async function updateRanking(req, res) {
  try {
    const ranking = await Ranking.update({score: literal('score +'+req.body.score)}, { where: {user_id: req.decoded.id}});
    if(ranking[0]) {
      res.status(200);
      res.json({
        "message": "score updated",
        "error": "",
      });
    } else {
      res.status(400);
      res.json({
        "message":"",
        "error": "ranking null",
      });
    }
    console.log(ranking);
    
    res.end();
  } catch (error) {
    console.error(error.message);
    res.status(500);
    res.json({
      "message":"",
      "error": "unexpected error",
    });
  }
};


module.exports = {
  updateRanking,
}