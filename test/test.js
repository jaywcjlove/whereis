const test = require('tap').test;
const whereis = require('../');

test("when which found our program", async (t) => {
  let where = await whereis('ls');
  t.equal(where, '/bin/ls', 'ls was found');
});

test("undefined", async (t) => {
  try {
    await whereis();
  } catch (error) {
    t.equal(error, 'Could not find undefined on your system; Command failed: which undefined\n', 'undefined was found');
    t.equal(error.message, undefined, 'undefined was found');
  }
});

test("Empty", async (t) => {
  try {
    await whereis('');
  } catch (error) {
    t.equal(error, 'Could not find  on your system; Command failed: which \nusage: which [-as] program ...\n', 'Empty was found');
    t.equal(error.message, undefined, 'Empty was found');
  }
});
