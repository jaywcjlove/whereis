const { exec } = require('child_process');

module.exports = function whereis(command, options) {
  return new Promise((resolve, reject) => {
    if (!command) {
      return reject('No command name is passed!');
    }
    const commandStr = /(win32)/.test(process.platform) ? `for %i in (${command}.exe) do @echo. %~$PATH:i` : `which ${command}`;
    exec(commandStr, options, (error, stdout, stderr) => {
      if (error) {
        reject(`Could not find ${command} on your system; ${error.message ? error.message : ''}`);
        return;
      }
      stdout = stdout.split('\n')[0];
      if (stdout === '' || stdout.charAt(0) !== '/') {
        reject(new Error(`Could not find ${command} on your system;`));
      }
      resolve(stdout, stderr);
    });
  });
}