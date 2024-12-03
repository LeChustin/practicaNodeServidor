var http = require('http');

function mensaje(req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.write('HOLA MUNDO'); // Mensaje que se enviará al cliente
    resp.end();
}

var server = http.createServer(mensaje);

server.listen(3000, function () {
    console.log("La solicitud fue realizada mediante el puerto 3000");
});

