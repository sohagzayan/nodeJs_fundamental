const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello bangladeshbashi");
    res.write("this is root/home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("hello about page ");
    res.write("this is about page");
    res.end();
  } else {
    res.write("not found your page here");
    res.end();
  }
});

server.listen(3000);
