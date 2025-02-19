import { WebSocket, WebSocketServer } from "ws";

import { getCryptoData } from "./binancewebsocket";
import { Server } from "http";


export const startWebSocketServer = (server:Server)=>{

    const wss = new WebSocketServer({ server });
    wss.on('connection', (ws) => {

        ws.on('message', (message) => {
            console.log('Received:', message);
            ws.send(`You said: ${message}`);
        });
    
        ws.send("you are now connected to ws server");
        
        const sendPrices = () => {
            const cryptoPrices = getCryptoData();
            ws.send(JSON.stringify({ cryptoPrices }));
    
        };
        sendPrices();
    
     
        const interval = setInterval(sendPrices, 1000);
    
        ws.on('close', () => {
            console.log('Client disconnected');
            clearInterval(interval);
        });
    });
    console.log('WebSocket server is running');
}
