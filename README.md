<h1 align="center"> Udacity Node.JS  Project Image Processing </h1>

## Description:
 
this


## Folder Structure

```bash
├── src
│   ├── routes
│   │   ├── api
│   │   │   │── utilities
│   │   │   │   └── validateData.ts => `To validate the image data`
│   │   │   │
│   │   │   │── guidance.ts => `for instructions on using the project`
│   │   │   └── pictures.ts => `for operations on the photo`
│   │   │   
│   │   └── index.ts => `import all routes and export it to main index`
│   │
│   │
│   ├── tests  => `for testing purposes`
│   │   ├── helpers
│   │   │   └── reporter.ts
│   │   │
│   │   ├── indexSpec.ts
│   │   └── .ts
│   │
│   │
│   ├── utilities => `for logger middleware`
│   │   └── logger.ts => `for log method & url`
│   │
│   │
│   └── index.ts => `to run the server`
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

