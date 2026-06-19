import type { IncomingMessage } from "http"

export const parseBody = (req: IncomingMessage): Promise<any>=>{
    return new Promise((resolve, reject)=>{
        let body = ""
        req.on("data", (chunk)=>{
            body +=chunk;
        })

        req.on("end", ()=>{
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(error);
            }
        })
    })
}