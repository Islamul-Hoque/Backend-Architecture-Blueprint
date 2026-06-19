import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProducts } from "../service/products.service";
import type { IProducts } from "../types/products.type";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";

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

        return sendResponse(res, 200, true, "Product retrieved successfully", product);
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
            return sendResponse(res, 200, true, "Product created successfully", newProduct);
        } catch (error) {
            return sendResponse(res, 500, false, "something went wrong", error);
        }
    }

    // Single products "PUT"
    else if (method === "PUT" && id !== null) {
        try {
            const body = await parseBody(req)
            const products = readProducts()

            // find product 
            const index = products.findIndex((p: IProducts) => p.id === id)

            // index Error handel
            if (index < 0) {
                return sendResponse(res, 404, false, "Product not found!", null);
            }

            // Update product details
            products[index] = { id: products[index].id, ...body }

            // update product Array in database
            insertProduct(products);
            return sendResponse(res, 200, true, "Product updated successfully", products[index]);
        } catch (error) {
            return sendResponse(res, 500, false, "something went wrong", error);
        }
    }

    // Single products "DELETE"
    else if (method === "DELETE" && id !== null) {
        try {
            const products = readProducts()

            // find product 
            const index = products.findIndex((p: IProducts) => p.id === id)

            // index Error handel
            if (index < 0) {
                return sendResponse(res, 404, false, "Product not found!", null);
            }

            // DELETE product from array
            products.splice(index, 1);

            // Delete product Array in database
            insertProduct(products);
            return sendResponse(res, 200, true, "Product deleted successfully", null);
        } catch (error) {
            return sendResponse(res, 500, false, "something went wrong", error);
        }
    }
}

