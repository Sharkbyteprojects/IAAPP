const express: any = require("express");
const app: any = express();
const crypto: any = require("crypto");
const password: string = process.env.ipw || crypto.createHash("md5").update(Math.random().toString()).digest("hex");
const bp: any = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded());
const path: any = require("path");
const pathto: string[] = [__dirname, "clientIAPP"];
app.use(express.static(path.resolve(...pathto)));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(...pathto, "index.html"));
});

app.post("/api/login", (req, res) => {
    let ret: boolean = false;
    if (req.body.pw == password) {
        ret = true;
    }
    res.json({ authorized: ret });
});

app.listen(8080, () => {
    console.log(`App listen on 8080 with password ${password}`);
});