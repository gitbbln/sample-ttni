import { TTNI } from 'ttni'
import { Cnsl } from 'ttni-cnsl'
let ttni = new TTNI();
let ni = ttni.ni.bind(ttni);
let ne = ttni.ne.bind(ttni);
console.log(ttni.ni)

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
var cnsl = new Cnsl();
var arr1 = 'a,b,c'.split(",");
var obj = cnsl.ao(arr1);
var cursor = cnsl.cursor;
var log = cnsl.log;
var loc = cnsl.loc;
loc("", 1, 1, '-G_R Y W', 'Андрей', 'test', 'cnsl');
loc("", 1, 2, '', 'Андрей', 'test', 'cnsl');

/*(['exit no', true]);
ttni.shTimer();
ttni.shStack();
*/