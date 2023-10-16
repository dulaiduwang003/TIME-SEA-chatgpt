import Koa from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
import { createCanvas } from "canvas";
import { generateQRCode } from "./logic/generate";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/qrcode", async (ctx) => {
  const outCanvas = createCanvas(1550, 1550);

  //const {url} = ctx.params;
  const url = ctx.query.url;

  // @ts-expect-error
  await generateQRCode(outCanvas, url);

  // ctx.type = "image/png";
  // ctx.body = outCanvas.toBuffer();
  const base64 = outCanvas.toDataURL(); 

  ctx.type = "text/plain";
  ctx.body = base64;
});

app.listen(3000, () => {
  console.log("server start on 3000 port");
});
