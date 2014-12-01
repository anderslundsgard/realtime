var http = require('http');
var url = require("url");

function start(route) {

    var server = http.createServer(function(request, response) {
        var pathname = url.parse(request.url, true).pathname;
        console.log("Request received: "+pathname);

        route(pathname, response);
    });

    server.listen(8888);

    console.log("Server started and waiting for connections.");

    return server;
}

exports.start = start;
