# sample-ttni 1.0.5

get function name  from stacktrace for web

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

### Run

```bash
yarn serve
```

## Contribute

```JavaScript
import { TTNI } from './node_modules/ttni/dist/index.js'

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
