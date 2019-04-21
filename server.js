"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = 3000;
const app = express();
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
app.use(express.static('./public'));
app.get('/testing', (req, res) => {
    res.send('testint testing');
});
