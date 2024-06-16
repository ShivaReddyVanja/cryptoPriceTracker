import { WebSocket } from "ws";
import symbolsFetcher from "../fetchers/symbolsFetcher";
import { CryptoData } from "../types";

const priceWsUrl = process.env.PRICE_WS_URL
const cryptoData: { [symbol: string]: CryptoData } = {};

export const startBinanceWebsocket = async () => {
    const tokens = await symbolsFetcher();

    const wsUrl = `${priceWsUrl}${tokens.join('/')}`;

    const ws = new WebSocket(wsUrl);
    ws.on('open', () => {
        console.log('connected to binance webscoket', wsUrl);
    })
    ws.on('message', (data) => {
        let message: string;
        if (typeof data === 'string') {
            message = data;
        } else if (data instanceof Buffer) {
            message = data.toString('utf-8');
        } else {
            console.error('Unexpected message type:', typeof data);
            return;
        }
        const parsedMessage = JSON.parse(message);
        const streamName = parsedMessage.stream;
        const messageData = parsedMessage.data;
         // Extract relevant data
         const symbol = messageData.s;
         const price = parseFloat(messageData.p);
         const name = symbol.toUpperCase;
         cryptoData[symbol] ={
            Name:name,
            SYMBOL:symbol,
            price:price
         }

    

    });
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
}
export const getCryptoData = (): CryptoData[] => {
    return Object.values(cryptoData);
};