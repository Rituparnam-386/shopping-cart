const express = require('express');
const route = express.Router;
const athController = require("/controller")
router.get('/', (req, req) => {
    res.render('index');

});
router.post("/auth/login", (req, res) => {
    res.render("login");
});
router.post("/login", authController.login)
module.exports = router;