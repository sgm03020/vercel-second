import * as Express from "express";

const app = Express();

// postリクエスト使えるようにする
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/get/:name", (req: Express.Request, res: Express.Response) => {
  try {
    res.send({ name: req.params.name });
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/post", (req: Express.Request, res: Express.Response) => {
  try {
    res.send({ name: req.body.name });
  } catch (error) {
    res.sendStatus(500);
  }
});

if (!process.env.NOW_REGION) {
  app.listen(process.env.PORT || 3000);
}

export default app;
