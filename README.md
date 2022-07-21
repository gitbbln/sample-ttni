# sample-ttni 1.0.5

<<<<<<< HEAD
Get function name  from stacktrace for web or node
=======
Get function name  from stacktrace for web
>>>>>>> b828053b5180fa1e2e8e5da9878c976d6cf9f5c2

## Download

```bash
git clone https://github.com/gitbbln/sample-ttni
```

### Install

```bash
yarn install
```

### Build

```bash
yarn build
```

### Run (for web)

```bash
yarn serve
```

## HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TypeScript for the web</title>
</head>
<body>
    <script type="module" src="./index.js"></script>
</body>
</html>


```

## index.js (html)

```JavaScript
import { TTNI } from './node_modules/ttni-web/dist/index.js'
```

### Run

```bash
yarn serve
```

<<<<<<< HEAD
## --------node----------

### Run (for node)

```bash
node index-node.js
```

## index-node.js
=======
## HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TypeScript for the web</title>
</head>
<body>
    <script type="module" src="./index.js"></script>
</body>
</html>


```

## index.js
>>>>>>> b828053b5180fa1e2e8e5da9878c976d6cf9f5c2

```JavaScript
import { TTNI } from 'ttni'
```

## --------commom part----------

```JavaScript
let ttni = new TTNI();
let ni = ttni.ni.bind(ttni);
let ne = ttni.ne.bind(ttni);


ttni.logs = { test0: true, test1: !true }
Object.assign(ttni, { bHtml: false, bShowTimer: true, bCaller: false, bTrace: true, logs: undefined, maxColorsLevel: 4 })

class Test2Class {
  test3() {
    ni()
    new Test1Class().test2();
    ne()
  }
  test4() {
    ni()
    this.test3();
    ne()
  }
  test5() {
    ni()
    this.test4();
    ne()
  }
}
class Test1Class {
  test1() {
    ni()
    ne()
  }
  test2() {
    ni()
    this.test1();
    ne()
  }

  //ttni.bLogsIgnore = !false;
}

function test3() {
  ni()
  new Test1Class().test2();
  ne()
}

function test4() {
  ni()
  test3();
  ne()
}

function test5() {
  ni()
  test4();
  ne()
}
const test1 = () => {
  ni()
  ne()
}
const test2 = () => {
  ni()
  test1();
  ne()
}

const p1 = new Test1Class();
//const p = new Test2Class();

function testExit(...nu) {
  ni(nu)
  ttni.shAt();

  //process.exit()

  ne()

}
testExit(['exit no', true]);
ttni.shTimer();
ttni.shStack();
```

### Show in browser F12 console

```JavaScript
Live reload enabled.
index.js:104   ->testExit(exit no,true)
index.js:303 items at: {fn: 'testExit ', caller: undefined, path: 'http://127.0.0.1:8080/index.js', file: 'index.js'}
index.js:104   <-testExit()
index.js:310 :6 ms
index.js:306 stack= Error
    at TTNI.ne (http://127.0.0.1:8080/node_modules/ttni/dist/index.js:297:42)
    at testExit (http://127.0.0.1:8080/index.js:77:3)
    at http://127.0.0.1:8080/index.js:81:1
```

### Show in terminal console

```JavaScript
 
 ->testExit(exit no,true)
items at: {
  fn: 'testExit ',
  caller: 'ModuleJob.run ',
  path: 'file:///J:/group-ttni/sample-ttni/index-node.js',
  file: 'index-node.js'
}
  <-testExit()
:38 ms
stack= Error
    at TTNI.ne (J:\group-ttni\sample-ttni\node_modules\ttni\dist\index.js:308:46)
    at testExit (file:///J:/group-ttni/sample-ttni/index-node.js:77:3)
    at file:///J:/group-ttni/sample-ttni/index-node.js:81:1
    at ModuleJob.run (node:internal/modules/esm/module_job:185:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
```
