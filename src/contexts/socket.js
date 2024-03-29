/*
 * Description: Create a socket useContext API to utilze the socket throughout different components of the application.
 * Developer: Oscar Saavedra
 */

// Import React - O.S.
import React from "react";
// Import socket.io for the client side - O.S.
import { io } from "socket.io-client";
// Set the url for the server
// The urls directs to the socket io server hosted online through Heroku - O.S.
const URL = "https://foursoulscardgame-server.herokuapp.com/";
// Create socket and autoconnect false to connect only when needed from other componenets - O.S.
export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"],
});
export const SocketContext = React.createContext();

// Create catch all listener to get feedback on server - O.S.
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
