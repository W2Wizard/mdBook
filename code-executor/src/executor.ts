// -----------------------------------------------------------------------------
// Codam Coding College, Amsterdam @ 2023.
// See README in the root project for more information.
// -----------------------------------------------------------------------------

import fs from "fs";
import tmp from "tmp";
import crypto from "crypto"
import { Modules } from "./modules/module.base";
import { ExecuteC } from "./modules/module.c";

/*============================================================================*/

export namespace Execution {
	/** Map to associate languange with the correct executionModule */
	export const modules: { [name: string]: Modules.Function } = {
		"c": ExecuteC,
	};

	/**
	 * Spawns a child process for the given module and executes the code.
	 * @param module The specified module to run
	 */
	export async function run(module: Modules.Function, code: string, flags: string): Promise<{ stdout: string; stderr: string; }> {
		console.log("Running ...");
		const instanceID = crypto.randomBytes(5).toString('hex');

		return new Promise<{ stdout: string, stderr: string }>((resolve, reject) => {
			tmp.file({ prefix: instanceID, postfix: ".c" }, async (err, path) => {
				if (err != null) throw err;
	
				// Write source code into tmp file.
				console.log("Writing to file:", path);
				fs.writeFileSync(path, code);
	
				const [data, error] = await module(path, flags);
				console.log("Done!", data);
				if (error) return reject(error);
				return resolve(data!);
			});
		});
	}
}
