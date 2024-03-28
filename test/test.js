const whereis = require('../');

test('when which found our program', async () => {
  let where = await whereis('ls');
  expect(where).toBe('/usr/bin/ls')
});

test('undefined', async () => {
  try {
    await whereis();
  } catch (error) {
    expect(error.message).toBe("No command name is passed!")
  }
});

test('Empty', async () => {
  try {
    await whereis('');
  } catch (error) {
    expect(error.message).toBe('No command name is passed!')
  }
});

test('Empty', async () => {
  try {
    await whereis('wwwwww');
  } catch (error) {
    expect(error.message).toBe('Could not find wwwwww on your system; Command failed: which wwwwww\n')
  }
});
