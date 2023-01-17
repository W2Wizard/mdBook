// -----------------------------------------------------------------------------
// Codam Coding College, Amsterdam @ 2023.
// See README in the root project for more information.
// -----------------------------------------------------------------------------

import FileSystem from "fs";
import { Response } from "express";
import config from "./config.json";
import CExecutor from "./modules/module.c";
import CPPExecutor from "./modules/module.cpp";
import ExecutionModule from "./modules/module.base";
import tmp from "tmp";

/*============================================================================*/

export namespace Execution {
	/** Map to associate languange with the correct executionModule */
	export const modules: { [name: string]: typeof ExecutionModule } = {
		"c": CExecutor,
		"cpp": CPPExecutor
	};

	/**
	 * Spawns a child process for the given module and executes the code.
	 * @param module The specified module to run
	 */
	export function run(moduleType: typeof ExecutionModule, code: string, flags: string, response: Response) {
		try {
			const module = new moduleType(code, flags);

			// Create temp file
			tmp.file({ dir: config.tmpDir, postfix: module.extension }, (err, path) => {
				// Write code into file
				FileSystem.writeFile(path, code, (err) => {
					if (err != null) throw err;
				});

				if (err != null) throw err;

				// Execute it.
				module.execute(path, (err, stderr, stdout) => {
					if (err) throw new Error(err.message);

					response.status(204).json({ result: stderr != "" ? stderr : stdout, error: null });
				});
			});
		} catch (error) {
			return response.status(500).json({ result: null, error: error });
		}
		return;
	}
}
