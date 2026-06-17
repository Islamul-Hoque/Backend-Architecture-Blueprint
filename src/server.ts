import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/route";

const server: Server = createServer((req: IncomingMessage, res)=>{
    routeHandler(req, res)
})

server.listen(5000, ()=>{
    console.log(`Server is running on the port: 5000`);
})
