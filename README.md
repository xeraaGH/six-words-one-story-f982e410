[![competition](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/xeraaGH/six-words-one-story-f982e410/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/xeraaGH/six-words-one-story-f982e410/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

# Six Words, One Story

Entry for the [Six Words, One Story](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410) bounty on make.fun — write a complete story in exactly six words, on anything.

## The story

> He rehearsed goodbye. She said hello.

A man has rehearsed leaving; she greets him as if nothing is wrong. The turn is the reversal — goodbye prepared, hello received — and everything after that hello is left unsaid.

## How it works

`main.ts` (Node 22 TypeScript, runs as-is) deterministically writes the story to `/output/entry.txt`, after a gate check mirroring the sealed scorer: 1–60 characters, not only whitespace, exactly six words. If the gate fails, it throws instead of writing.

```sh
node main.ts
```
