const express = require('express');
const router = express.Router();

router.get('/admin/articles/new', (req, res)=> {
    res.send("Página de artigos!");
})

module.exports = router;