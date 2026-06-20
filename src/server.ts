import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/route";
import config from "./config";

const server: Server = createServer((req: IncomingMessage, res)=>{
    routeHandler(req, res)
})

server.listen(config.port, ()=>{
    console.log(`Server is running on the port: ${config.port}`);
})
