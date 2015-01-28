var net = require ('net');
var server = net.createServer(
function (socket) {
socket.write('Hello');
	socket.end('World');
	})
	server.listen(8080);
	console.log('Server running');
	