fs = require('fs');
let code = fs.readFileSync('./main.js').toString();

const zero = '+[]';
const one = '+!![]';

const number = n => {
    if (n === 0) return zero;
    return Array.from({length : n}, () => one).join(' + ');
}

const map = {};

const fromString = s => s.split('').map(x => {
    if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`;
    }
    return map[x];
}).join('+');

map.o = `({}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.j = `({}+[])[${number(3)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[' '] = `({}+[])[${number(7)}]`;
map.a = `(+{}+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.l = `(![]+[])[${number(2)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.i = `((${one}/${zero})+[])[${number(3)}]`;
map.n = `((${one}/${zero})+[])[${number(4)}]`;
map.S = `(([]+[])[${fromString('constructor')}]+[])[${number(9)}]`;
map.g = `(([]+[])[${fromString('constructor')}]+[])[${number(14)}]`;
map.p = `((/-/)[${fromString('constructor')}]+[])[${number(14)}]`;
map['\\'] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;

const obfuscate = code => `(() => {})[${fromString('constructor')}](${fromString(code)})()`;

console.log(obfuscate(code));
