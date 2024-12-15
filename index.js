const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // rout to json file
const middleware = jsonServer.defaults(); // can user GET POST PUT PATCH DELETE
const core = require("cors"); //make all user can use this API
server.use(core()); //let  user can use your API
server.use(middleware); //let  can user GET POST PUT PATCH DELETE
server.use(router);

const port = 3000;
const host = "localhost";
server.listen(port, () => {
  console.log(`http://${host}:${port}`);
});
