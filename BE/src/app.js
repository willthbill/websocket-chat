const server = require("http").createServer(() => {});
server.listen(1576, () => console.log("lisiting..."));
const wsserver = new (require("websocket")).server({
	httpServer : server
});
let messages = [];
const connections = [];
const sendMessages = () => {
	for(const connection of connections){
		connection.send(JSON.stringify(messages));
	}
};
wsserver.on("request", (req) => {
	const connection = req.accept(null, req.origin);
	connections.push(connection);
	connection.send(JSON.stringify(messages));
	connection.on("message", (mes) => {
		if(mes.type == "utf8"){
			console.log("message recieved");
			messages.push(mes.utf8Data);
			sendMessages();
		}
	});
});
