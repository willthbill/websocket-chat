const server = require("http").createServer(() => {});
server.listen(1576, () => console.log("lisiting..."));
const wsserver = new (require("websocket")).server({
	httpServer : server
});
let messages = [];
const connections = {};
const sendMessageToAllClients = (message) => {
	console.log(connections);
	for(const ip in connections){
		console.log(message);
		connections[ip].send(JSON.stringify([message]));
	}
};
wsserver.on("request", (req) => {
	const connection = req.accept(null, req.origin);
	connections[connection.remoteAddress + " " + (new Date()).getTime()] = connection;
	connection.send(JSON.stringify(messages));
	connection.on("message", (mes) => {
		if(mes.type == "utf8"){
			console.log("message recieved");
			messages.push(mes.utf8Data);
			sendMessageToAllClients(mes.utf8Data);
		}
	});
});
