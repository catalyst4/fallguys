const express = require('express');
const router = express();

router.get('/rounds', (req,res) => {

    return res.render('rounds');

});

module.exports = router;