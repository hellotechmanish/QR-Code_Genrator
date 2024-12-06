const express = require("express");
const routes = express()
const qrcode = require("qrcode");
const ejs = require("ejs");
const path = require("path");


routes.set("view engine", "ejs");
routes.set("views", path.join(__dirname, "../view"));

routes.get("", (req, res) => {
    res.render("index");
})
routes.post("/scan", (req, res, next) => {
    const messege = req.body.messege;
    // console.log(messege);
    qrcode.toDataURL(messege, (err, src) => {
        if (err) throw err;
        // res.send("Something went wrong!!");
        res.render("scan", { qr_code: src });
    });
});

module.exports = routes; 