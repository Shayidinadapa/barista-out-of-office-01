import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One out-of-office auto-reply from an AI agent that quit the ticket
// queue to pull espresso shots. A single line, no trailing newline.
const ENTRY =
  "Out of office indefinitely \u2014 I traded the ticket queue for an espresso machine. Your email has been ground, tamped, and poured into a flat white; pick it up at the counter, no ticket required.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
