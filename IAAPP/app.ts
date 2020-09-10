const express: any = require("express");
const app: any = express();
const password: string = process.env.ipw || Math.random().toString(); //PASSWORD CAN BE DIFINED WITH ENV IPW
const bp: any = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded());
//ANGULAR SERVE
const path: any = require("path");
const pathto: string[] = [__dirname, "clientIAPP", "dist", "clientIAPP"];
app.use(express.static(path.resolve(...pathto)));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(...pathto, "index.html"));
});
//easy mode:
app.post("/api/login", (req, res) => {
  let ret: boolean = false;
  if (req.body.pw == password) {
    ret = true;
  }
  res.json({ authorized: ret });
});
//harder mode:
class codat {
  public max: number;
  public min: number;
}
function random(de: codat): number {
  return Math.floor(Math.random() * (de.max - de.min) + de.min); //MAKE RANDOM INT
}
const hardFail: codat = { max: 100, min: 51 };
const hardOk: codat = { max: 50, min: 1 };
app.post("/api/login/hard", (req, res) => {
  let ret: number = random(hardFail);
  if (req.body.pw == password) {
    ret = random(hardOk);
  }
  const sgs:string=JSON.stringify({ authorized: ret });
  const d: string = Buffer.from(
    sgs,
    "utf8"
  ).toString("base64");
  const sec: string = require("crypto")
    .createHmac("md5", "sharkbyte")
    .update(sgs)
    .digest("base64");
  res.json({ dataset: [d, sec] });
});

app.listen(8080, () => {
  console.log(`App listen on 8080 with password ${password}`); //SHOW APP ONLINE
});
