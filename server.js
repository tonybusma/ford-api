const http = require("http");
const app = require("./config/express");

http.createServer(app).listen(process.env.PORT || 3000, function () {
  console.log("Servidor escutando na porta: " + this.address().port);
});
