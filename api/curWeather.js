const express = require('express');
const router = express.Router();

const API_KEY = "6be5ad057d595a50a268e1e8af7b4033";

router.get('/', async (req, res) => {
    try {
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?zip=65802,us&units=imperial&appid=${API_KEY}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.cod === 200) {
                console.log(data);
                res.status(200).json(data)
              } else {
              }
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
            });
        
        }
    catch (error){
        console.log(error);
        res.status(500).json({msg: 'internal server error'})
    }
  });

module.exports = router;    