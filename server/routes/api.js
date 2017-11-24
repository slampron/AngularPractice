const express = require('express');
const router = express.Router();
const fs = require('fs')


fs.readFile('./routes/player.json', function (err, data) {
    if (err) throw error;
    let player = JSON.parse(data);
    console.log(player);
});

fs.writeFile('./routes/message.txt', this.player, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

/* GET api listing. */
router.get('/player', (req, res) => {
    res.send('Player Returned');
    console.log('endpoint called');
});

// router.put('/player', (req, res) => {
//     res.send('Player Updated');
// });

module.exports = router;