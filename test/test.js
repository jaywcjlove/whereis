const whereis = require('../');

test('when which found our program', async () => {
  let where = await whereis('ls');
  expect(where).toBe('/usr/bin/ls')
});

test('undefined', async () => {
  try {
    await whereis();
  } catch (error) {
    expect(error).toBe('No command name is passed!')
    expect(error.message).toBe(undefined)
  }
});

test('Empty', async () => {
  try {
    await whereis('');
  } catch (error) {
    expect(error).toBe('No command name is passed!')
    expect(error.message).toBe(undefined)
  }
});
