const { execFile } = require('child_process');

/**
 * @typedef {Object} Options
 * @property {'buffer' | null} encoding `encoding` means stdout/stderr are definitely `Buffer`.
 * 
 * @typedef {import("child_process").ExecOptions} ExecOptions
 * @param {string} command 
 * @param {ExecOptions & Options} options 
 * @returns {Promise<string>}
 */
function whereis(command, options) {
  return new Promise((resolve, reject) => {
    if (!command) {
      return reject(new Error('No command name is passed!'));
    }
    const commandStr = /(win32)/.test(process.platform) ? `${command}.exe` : command;
    execFile('which', [commandStr], options, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Could not find ${command} on your system; ${error.message ? error.message : ''}`));
        return;
      }
      const str = stdout.toString().split('\n')[0];
      if (str === '' || str.charAt(0) !== '/') {
        reject(new Error(`Could not find ${command} on your system;`));
      }
      resolve(str);
    });
  });
}

module.exports = whereis;