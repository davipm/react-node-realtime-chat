import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

export default route;
