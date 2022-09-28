var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

module.exports = router;


const OWM_API_KEY = process.env.OWM_API_KEY;

router.get('/movie', (req, res) => {
        fetch(`https//:api.themoviedb.org/3/movie/76341?api_key=${OWM_API_KEY}&language=fr`) 
          
 .then(response => response.json())
 .then(data => {
  res.json({data:data.results})
 }) 
});



module.exports = router;