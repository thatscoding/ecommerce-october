import server from "./config/server.js";

const PORT = process.env.PORT;

server.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log(`server started at http://localhost:${PORT}`);
});
