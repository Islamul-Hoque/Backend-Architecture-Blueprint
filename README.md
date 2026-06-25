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

server.listen(config.port, ()=>{
    console.log(`Server is running on the port: ${config.port}`);
});

```

### 6. Development Tools  
- Install `tsx` → `npm i tsx`  
- Run dev server → `npm run dev`  
- Server will run at: `http://localhost:${config.port}` 

### 7. Environment Variables  
- Install `dotenv` → `npm i dotenv`  
- Create `.env` file in root → store secrets/config  

--- 


## <img src="assets/about_me.svg"  width="25"> Author 

- **Islamul Hoque**  
- MERN Stack Developer | Backend Enthusiast | Problem Solver
- <p align="left">
  <a href="https://www.linkedin.com/in/Islamul-Hoque">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:islamulhoque2006@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://islamul-hoque-portfolio.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <a href="https://codeforces.com/profile/Islamul-Hoque">
    <img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white"/>
  </a>
  <a href="https://www.hackerrank.com/profile/islamulhoque2006">
    <img src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white"/>
  </a>
</p>





