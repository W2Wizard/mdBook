// -----------------------------------------------------------------------------
// Codam Coding College, Amsterdam @ 2023.
// See README in the root project for more information.
// -----------------------------------------------------------------------------

import Path from "path";
import Shell from "child_process";
import ExecutionModule from "./module.base";

/*============================================================================*/

class CExecutor extends ExecutionModule {
	constructor(code: string, flags: string) {
		super(code, flags)
		this.extension = ".c";
	}

	/**
	 * Compiles and executes the code
	 */
	public execute(file: string, cb: (err: Shell.ExecException | null, stderr: string, stdout: string) => void): void {

		// Compile it
		Shell.exec(`gcc ${this.flags} ${file} -o output.out`, {
			timeout: 10000
		}, (err, stdout: string, stderr: string) => cb(err, stderr, stdout));

		// Execute it.
		Shell.execFile("output.out", { timeout: 10000 }, (err, stdout, stderr) => cb(err, stderr, stdout));
	}
}

export default CExecutor;