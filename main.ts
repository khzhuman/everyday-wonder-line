import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The elevator doors opened on my floor before I pressed the button, and for one second the building knew where I was going.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);

// One sentence, one small wonder: the building knew before I did.
