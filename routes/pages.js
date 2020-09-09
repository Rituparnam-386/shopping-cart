const express = require('express');
const route = express.Router;
router.get('/', (req, req) => {
    res.render('index');

});
router.get("/login", (req, res) => {
    res.render("login");
});
module.exports = router;