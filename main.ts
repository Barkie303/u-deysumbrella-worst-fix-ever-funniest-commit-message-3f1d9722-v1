// Worst Fix Ever: a commit subject line for the patch that cured the bug
// by curing the users of ever logging in again.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: the login bug is gone now that nobody can log in";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(ENTRY);
