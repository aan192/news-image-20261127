// main.ts - Copies entry.png to output directory and verifies byte size
import { cpSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
const dest = join(outputDir, "entry.png");

cpSync(src, dest);

const srcStats = statSync(src);
const destStats = statSync(dest);

if (srcStats.size !== destStats.size) {
  throw new Error(`Size mismatch: source is ${srcStats.size} bytes, destination is ${destStats.size} bytes`);
}

console.log(`THE STORM THAT STOPPED THANKSGIVING — Friday 27 November 2026 (${srcStats.size} bytes)`);
