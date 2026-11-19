// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: the meme (meme.png) is posted from a public
// X account, its text carrying make.fun and the entrant's play code, and this
// program hands the post's address to the gate by copying POST.json from the
// repository root to /output/POST.json. That copy is all it does.
//
// POST.json holds {"url": "https://x.com/<handle>/status/<id>"} once the meme
// is posted. Until then there is no post to hand in, so the repository ships
// without POST.json and this program exits 1 saying so — that is the honest
// state of an entry awaiting its post, not a broken program.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
