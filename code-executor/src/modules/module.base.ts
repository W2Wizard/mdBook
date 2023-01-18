// -----------------------------------------------------------------------------
// Codam Coding College, Amsterdam @ 2023.
// See README in the root project for more information.
// -----------------------------------------------------------------------------

/*============================================================================*/

export namespace Modules {
	export type Function = (file: string, flags: string) => ReturnType;
	export type ReturnType = Promise<[{ stdout: string, stderr: string } | null, any | null]>;
}
