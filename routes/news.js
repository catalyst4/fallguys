const express = require('express');
const router = express();

router.get('/news', (req,res) => {

    return res.render('news');

});

module.exports = router;