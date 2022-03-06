const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write("this is home page");
    res.write(`<html><head><title>Frome</title></head>`);
    res.write(`
        <body>
        <form method="post" action="/prosess">
            <input type="text" name="massage">
        </form>
        </body>
        `)
        console.log('res')
    res.end();
  }else if(req.url === '/prosess' && req.method === 'POST'){
    req.on('data', (chunk) =>{
        console.log(chunk.toString())
    })
    res.write('succesFully Submited')
    res.end()
  } else{
    res.write('not found')
    res.end()
  }
});
server.listen(3000)
