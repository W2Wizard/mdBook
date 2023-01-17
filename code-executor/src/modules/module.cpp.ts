// -----------------------------------------------------------------------------
// Codam Coding College, Amsterdam @ 2023.
// See README in the root project for more information.
// -----------------------------------------------------------------------------

import Shell from "child_process"
import ExecutionModule from "./module.base";

/*============================================================================*/

class CPPExecutor extends ExecutionModule {
	constructor(code: string, flags: string) {
		super(code, flags)
	}

	public execute(file: string, cb: (err: Shell.ExecException | null, stderr: string, stdout: string) => void): void {

	}
}

export default CPPExecutor;