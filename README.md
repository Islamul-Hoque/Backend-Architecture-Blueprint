<!-- <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Islamul-Hoque&layout=compact&theme=tokyonight" alt="Top Languages" /> 
<img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=islamul-Hoque&theme=tokyonight"> -->

## 1. npm init -y

- package.json: 👇  
  - "type": "commonjs" ❌   
  - "scripts":   
    - "dev": "tsx watch ./src/server.ts",   ✅  

## 2. npm i -D typescript
## 3. npx tsc --init
- tsconfig.json: 👇
  - comment out ✅
    - "rootDir": "./src",   
    - "outDir": "./dist",   
  - comment 
    - "jsx": "react-jsx", ❌  

  - Edit
    - "module": "esnext", ✅
    - "types": ["node"], ✅

## 4. npm install -D @types/node

### 5. Create folder & File
- Folder  
  - src  
- file  
  - server.ts  

```
import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage, res)=>{
    console.log(req.url);
    console.log(req.method);
})

server.listen(5000, ()=>{
    console.log(`Server is running on the port: 5000`);
})

```

## 5. npm i tsx

## 6. npm run dev
