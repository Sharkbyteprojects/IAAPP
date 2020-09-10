const express: any = require("express");
const app: any = express();
const crypto: any = require("crypto");
const password: string = process.env.ipw || crypto.createHash("md5").update(Math.random().toString()).digest("hex");
const bp: any = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded());


app.post("/api/login", (req, res) => {
    let ret: boolean = false;
    if (req.body.pw == password) {
        ret = true;
    }
    res.json({authorized: ret});
});

app.listen(8080, () => {
    console.log(`App listen on 8080 with password ${password}`);
});