import type { ServerResponse } from "http";

export const sendResponse = (
    res: ServerResponse,
    statusCode: number,
    success: boolean,
    message: string,
    data?: any,
)=>{

    const response ={success, statusCode, message, data}
    res.writeHead(statusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(response));
}