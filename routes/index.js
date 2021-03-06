var express = require('express');
var router = express.Router();

var videoController = require('../controllers/videos_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Lista De Reproduccion'});

});


/*Get Videos page */
router.get('/videos', videoController.index);
router.get('/videos/1', videoController.videos1);
router.get('/videos/2', videoController.videos2);

module.exports = router;
