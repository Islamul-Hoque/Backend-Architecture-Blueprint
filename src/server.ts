import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/route";

const server: Server = createServer((req: IncomingMessage, res)=>{
    const url = req.url;
        const method = req.method
    
        if (url == "/" && method == "GET") {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "This is Root route" }));
        
        } else {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Route not found!" }));
        }
})

server.listen(5000, ()=>{
    console.log(`Server is running on the port: 5000`);
})
