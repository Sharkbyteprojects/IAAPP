const express = require("express");
const app = express();
const crypto = require("crypto");
const password = process.env.ipw || crypto.createHash("md5").update(Math.random().toString()).digest("hex");
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded());
app.post("/api/login", (req, res) => {
    let ret = false;
    if (req.body.pw == password) {
        ret = true;
    }
    res.json({ authorized: ret });
});
app.listen(8080, () => {
    console.log(`App listen on 8080 with password ${password}`);
});
//# sourceMappingURL=app.js.map
