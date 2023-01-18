// -----------------------------------------------------------------------------
// Codam Coding College, Amsterdam @ 2023.
// See README in the root project for more information.
// -----------------------------------------------------------------------------

// import tmp from "tmp";
// import Path from "path";
// import crypto from "crypto"
import cors from "cors";
import express from "express";
import { Request, Response, NextFunction } from "express";
import { Execution } from "./executor";
// import config from "./config.json";

// Globals
/*============================================================================*/

export const webserv = express();
export const port = 4242;

// Middleware
/*============================================================================*/

webserv.use(cors());
webserv.use(express.json());
webserv.use(express.urlencoded({ extended: true }));
webserv.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err.statusCode === 400 && "body" in err)
		res.status(400).send({ status: 400, message: err.message });
});

// Routes
/*============================================================================*/

webserv.post('/playground/', async (req, res) => {
	const code = req.body.code;
	const flags = req.body.flags;
	const language = req.body.language;

	// Check request
	if(!req.is("application/json"))
		return res.status(400).json({ result: null, error: "Incorrect content type!" });
	if (code == null || language == null || flags == null)
		return res.status(400).json({ result: null, error: "Malformed body" });

	// TODO: Get from config.
	// TODO: Check from which domain the request came from.
	if (req.headers.origin && !req.headers.origin.includes("codam.nl"))
		return res.status(403).json({ result: null, error: "Non-valid origin" });

	// TODO: Probs add a few more checks here for unwanted requests.

	// Find module
	const module = Execution.modules[language];
	if (module == undefined)
		return res.status(404).json({ result: null, error: "Unsupported Language!" });

	console.log(`[Playground] [${language}] body:`, code);

	try {
		const out = await Execution.run(module, code, flags);
		res.status(201).json({
			result: out.stderr != "" ? out.stderr : out.stdout,
			error: null
		});
	} catch (error) {
		res.status(500).json({ result: null, error: error }).end();
	}
	return;
});


// Entry point
/*============================================================================*/

webserv.listen(port, () => {
	console.log(`[Playground] Running on: ${port}`);
});
