import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "Our office printer only jams on deadline day \u2014 turns out it negotiated that into its contract.\n",
  "utf-8",
);
