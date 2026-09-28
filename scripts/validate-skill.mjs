import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const skill = readFileSync(new URL("../SKILL.md", import.meta.url), "utf8");
const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const license = readFileSync(new URL("../LICENSE", import.meta.url), "utf8");

assert.match(skill, /^---\nname: three-rooms\ndescription: \S[^\n]+\n---\n/);
for (const heading of [
  "# Three Rooms",
  "## Room 1: Dreamer",
  "## Room 2: Realist",
  "## Room 3: Critic",
  "## Final synthesis",
]) {
  assert.ok(skill.includes(heading), `Missing skill section: ${heading}`);
}
assert.match(readme, /\$three-rooms\b/);
assert.match(readme, /\/three-rooms\b/);
assert.match(readme, /\.agents\/skills\/three-rooms/);
assert.match(readme, /\.claude\/skills\/three-rooms/);
assert.match(license, /^MIT License\n/);

console.log("Three Rooms skill package is valid.");
