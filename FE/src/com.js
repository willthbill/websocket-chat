const ip = "139.162.143.213";

const socket = new WebSocket(`ws://${ip}:1576`);

const alias = (() => {
    if(localStorage.getItem("alias")){
        return localStorage.getItem("alias");
    }else{
        const alias = prompt("Enter your alias");
        localStorage.setItem("alias", alias);
        return alias;
    }
})();

function Message(message){
    this.text = message;
    this.alias = alias;
    this.time = (new Date()).toGMTString()
};

const sendMessage = () => {
    const element = document.getElementById("content");
    const data = element.value;
    if(data == "") return;
    socket.send(JSON.stringify(new Message(data)));
    element.value = "";
    console.log("message sent");
}

const appendMessage = (message, container) => {
    const div = document.createElement("div");
    div.className = "message-container";
    div.innerHTML = 
    `<span class="messageMetadata">Message at <strong>${message.time}</strong> ` +
    `from <strong>${message.alias}</strong></span>` +
    `<div class="message"><span>${message.text}</span></div>`;
    container.appendChild(div);
}

const handleRecievedMessages = (mes) => {
    if(mes.data == "") return;
    const messages = JSON.parse(mes.data);
    const container = document.getElementById("history");
    messages.forEach((message) => appendMessage(JSON.parse(message), container));
}

socket.addEventListener("open", () => {
    console.log("socket successfully opened");
    document.getElementById("send").onclick = sendMessage;
});

socket.addEventListener("message", (mes) => handleRecievedMessages(mes));
