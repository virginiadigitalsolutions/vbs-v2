const fs = require("fs");
const path = require("path");

const target = path.join(
  process.cwd(),
  "node_modules",
  "next",
  "dist",
  "server",
  "app-render",
  "entry-base.js"
);

const originalBlock = `if (process.env.NODE_ENV === 'development') {
    const mod = require('../../next-devtools/userspace/app/segment-explorer-node');
    SegmentViewNode = mod.SegmentViewNode;
    SegmentViewStateNode = mod.SegmentViewStateNode;
}`;

const patchedBlock = `if (process.env.NODE_ENV === 'development' && process.env.NEXT_ENABLE_SEGMENT_EXPLORER === '1') {
    const mod = require('../../next-devtools/userspace/app/segment-explorer-node');
    SegmentViewNode = mod.SegmentViewNode;
    SegmentViewStateNode = mod.SegmentViewStateNode;
}`;

if (!fs.existsSync(target)) {
  console.warn("[patch-next-devtools] target file not found:", target);
  process.exit(0);
}

const source = fs.readFileSync(target, "utf8");

if (source.includes(patchedBlock)) {
  console.log("[patch-next-devtools] already patched");
  process.exit(0);
}

if (!source.includes(originalBlock)) {
  console.warn("[patch-next-devtools] expected block not found, skipping");
  process.exit(0);
}

fs.writeFileSync(target, source.replace(originalBlock, patchedBlock), "utf8");
console.log("[patch-next-devtools] patched Next segment explorer guard");
