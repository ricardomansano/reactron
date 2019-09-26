var express = require("express");
var app = express()
let port = 3333

app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});

app.get("/url", (req, res, next) => {
    // Devolve parametros da query ao response
    console.log(req.query)
    res.json(req.query)
});