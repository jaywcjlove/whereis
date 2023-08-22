export = whereis;
/**
 * @typedef {Object} Options
 * @property {'buffer' | null} encoding `encoding` means stdout/stderr are definitely `Buffer`.
 *
 * @typedef {import("child_process").ExecOptions} ExecOptions
 * @param {string} command
 * @param {ExecOptions & Options} options
 * @returns {Promise<string>}
 */
declare function whereis(command: string, options: ExecOptions & Options): Promise<string>;
declare namespace whereis {
    export { Options, ExecOptions };
}
type ExecOptions = import("child_process").ExecOptions;
type Options = {
    /**
     * `encoding` means stdout/stderr are definitely `Buffer`.
     */
    encoding: 'buffer' | null;
};
