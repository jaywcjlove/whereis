const test = require('tap').test;
const whereis = require('../');

test("when which found our program", async (t) => {
  let where = await whereis('ls');
  t.equal(where, '/bin/ls', 'ls was found');
});
