import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json")

// read->GET
export const readProducts =()=>{
    const products = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(products)
}

// insert->POST
// export const insertProduct =(payload: any)=>{
//     fs.writeFileSync(filePath, JSON.stringify(payload))
// }