const assert = require('assert');
const LoremGenerator = require('./core');

const words = LoremGenerator.generateWords(5);
assert.strictEqual(words.split(' ').length, 5);

const paras = LoremGenerator.generateParagraphs(2);
assert.strictEqual(paras.split('\n\n').length, 2);
console.log('ok, all LoremGenerator assertions passed');
