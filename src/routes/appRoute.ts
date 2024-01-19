import express from "express";
import path from "path";

const appRouter = express();

appRouter.get("/", (_req, res) => {
  const __dirname = path.resolve();
  appRouter.use(express.static(path.join(__dirname, "src")));

  res.sendFile(path.join(__dirname, "src", "pages", "hello.html"));
});

export default appRouter;
