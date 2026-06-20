## <img src="assets/activities.svg"  width="25"> <b>Node.js & TypeScript Server Setup Steps  </b>

### 1. Project Initialization  
- `npm init -y` → auto‑generate `package.json`  
- `package.json` এ 
  - Remove: `"type": "commonjs"`
  - `"scripts"` update:  
    ```json
    "scripts": {
      "dev": "tsx watch ./src/server.ts"
    }

### 2. TypeScript Setup  
- Install TypeScript → `npm i -D typescript`  

### 3. Initialize config 
- `npx tsc --init` → auto‑generate `tsconfig.json`
  - Comment out: 
    - `"rootDir": "./src", `, 
    - `outDir": "./dist"`  
  - Remove: 
    - `"jsx": "react-jsx"`  
  - Edit: 
    - `"module": "esnext"`, 
    - `"types": ["node"]`  


### 4. Node.js Type Definitions  
- Install → `npm install -D @types/node`  

### 5. Project Structure  
- Create folder → `src`  
- Create file → `server.ts`  

```ts
import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage, res) => {
  console.log(req.url);
  console.log(req.method);
});

server.listen(5000, () => {
  console.log(`Server is running on the port: 5000`);
});

```

### 6. Development Tools  
- Install `tsx` → `npm i tsx`  
- Run dev server → `npm run dev`  

### 7. Environment Variables  
- Install `dotenv` → `npm i dotenv`  
- Create `.env` file in root → store secrets/config  
