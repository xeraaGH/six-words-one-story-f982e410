// Six Words, One Story — entry program.
//
// Writes exactly one six-word story to /output/entry.txt.
// The story: "He rehearsed goodbye. She said hello."
// A man has rehearsed leaving; she greets him as if nothing is wrong.
// The turn is the reversal — goodbye prepared, hello received — and
// everything after that hello is left for the reader to fill in.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "He rehearsed goodbye. She said hello.";

// The gate counts words the way a reader does: runs of non-space
// characters separated by whitespace. Punctuation stays attached to
// its word, so "goodbye." and "hello." each count as one word.
function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function gateCheck(text: string): void {
  // Mirror the sealed scorer's gate: UTF-8 text, 1-60 characters,
  // not only whitespace, exactly six words.
  if (text.length < 1 || text.length > 60) {
    throw new Error(`gate failed: length ${text.length} not in 1..60`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  const words = countWords(text);
  if (words !== 6) {
    throw new Error(`gate failed: expected exactly 6 words, got ${words}`);
  }
}

function main(): void {
  gateCheck(STORY);
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, STORY, "utf8");
  // Verify what actually landed on disk, not just what we intended.
  const written = readFileSync(outPath, "utf8");
  if (written !== STORY) {
    throw new Error("verification failed: file content differs from story");
  }
  gateCheck(written);
  console.log(`wrote ${outPath}: ${JSON.stringify(STORY)}`);
  console.log(`words: ${countWords(STORY)}, chars: ${STORY.length}`);
}

main();
