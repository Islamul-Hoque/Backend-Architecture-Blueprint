import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProducts } from "../service/products.service";
import type { IProducts } from "../types/products.type";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendresponse";
import { error } from "console";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/")
    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null

    // All products "GET"
    if (method === "GET" && url === "/products") {
        try {
            const products = readProducts()
            return sendResponse(res, 200, true, "Products retrieved successfully", products);
        } catch (error) {
            return sendResponse(res, 500, false, "something went wrong", error);
        }
    }

    // Single products "GET"
    else if (method === "GET" && id !== null) {
        try {
        const products = readProducts()
        const product = products.find((p: IProducts) => p.id === id)

        // Id not found
        if (!product) {
            return sendResponse(res, 404, false, "Product not found!");
        }

        return sendResponse(res, 200, true, "Product retrieved successfully", products);
        } catch (error) {
            return sendResponse(res, 500, false, "something went wrong", error);
        }
    }

    // Single product "POST"
    else if (method === "POST" && url === "/products") {
        try {
            const products = readProducts()

            const body = await parseBody(req)
            const newProduct = {
                id: Date.now(),
                ...body
            }
            products.push(newProduct)
            insertProduct(products);
            return sendResponse(res, 200, true, "Product retrieved successfully", newProduct);
        } catch (error) {
            return sendResponse(res, 500, false, "something went wrong", error);
        }
    }

    // Single products "PUT"
    else if (method === "PUT" && id !== null) {
        const body = await parseBody(req)
        const products = readProducts()

        // find product 
        const index = products.findIndex((p: IProducts) => p.id === id)

        // index Error handel
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Product not found!", data: null }));
        }

        // Update product details
        products[index] = { id: products[index].id, ...body }

        // update product Array in database
        insertProduct(products);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Product updated successfully", data: products[index] }));
    }

    // Single products "DELETE"
    else if (method === "DELETE" && id !== null) {
        const products = readProducts()

        // find product 
        const index = products.findIndex((p: IProducts) => p.id === id)

        // index Error handel
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Product not found!", data: null }));
        }

        // DELETE product from array
        products.splice(index, 1);

        // Delete product Array in database
        insertProduct(products);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Product deleted successfully", data: null }));
    }
}

