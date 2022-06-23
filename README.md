<h1 align="center"> Udacity Node.JS  Project Image Processing </h1>

## Description:
 
this


## Folder Structure

```bash
├── src
│   ├── routes
│   │   ├── api
│   │   │   |── utilities
│   │   │   |── guidance.ts
│   │   │   └── pictures.ts
│   │   └── index.ts
│   │   
│   ├── tests
│   │   ├── helpers
│   │   │   └── reporter.ts
│   │   ├── indexSpec.ts
│   │   └── _ImageRouterSpec.ts
│   │   
│   ├── utilities => `for logger middleware`
│   │   └── logger.ts => `for log method & url`
│   └── index.ts => `for run server`
└──
```

## To run this project

`Step 1` : Download the source code .

```
git clone https://github.com/MohamedAlabasy/Udacity-Node.JS-Image-Processing.git
```

`Step 2` : Enter the project file then install package

```
npm i
```

`Step 3` : to run project

```
node run start
```

to run eslint to check error

```
npm run lint
```

to run eslint and auto fixed error

```
npm run lint:f
```

to compile the TS code

```
npm run build
```

to run the JS code

```
node dist/index.js
```

