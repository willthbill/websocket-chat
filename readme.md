# Simple chat webapp with nodejs and websockets

## Installation
Install yarn.
Clone this repository: `git clone https://github.com/williamMBDK/websocket-chat.git`
Navigate to the root folder of the repository.
Run command from root folder: `cd BE && yarn install`
Run command from root folder: `cd FE && yarn install`

## Running
To run both the frontend and backend server locally on linux, you can run the bashfile 'run' with the following command in the repository's root directory: `"./run"`. You may have to use `chmod +x ./run` before to make sure the 'run' file can be executed.

To access the webapp on your local network you will have to put in your hosting machines local ip address in `FE/src/com.js` at line 1 like this: `const ip = "your machine's ip address"`



To change the alias you will have to clear the browsers localstorage.
