import { build } from "vite";
import { readFile, writeFile, rm, readdir, cp } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const project = fileURLToPath(new URL("..", import.meta.url));
const repository = path.resolve(project, "..");
await build({ root: project });
await build({
  root: project,
  build: {
    ssr: "src/entry-server.jsx",
    outDir: ".ssr",
    emptyOutDir: true,
    copyPublicDir: false,
  },
});
const { render } = await import(path.join(project, ".ssr/entry-server.js"));
const indexPath = path.join(project, "dist/index.html");
const html = (await readFile(indexPath, "utf8")).replace(
  '<div id="root"></div>',
  `<div id="root">${render()}</div>`,
);
await writeFile(indexPath, html);
await rm(path.join(project, ".ssr"), { recursive: true, force: true });
// Pages continues to publish main / (root). Only generated paths are replaced.
for (const name of ["assets", "static"])
  await rm(path.join(repository, name), { recursive: true, force: true });
for (const name of ["asset-manifest.json", "style.css", "logo.png"])
  await rm(path.join(repository, name), { force: true });
for (const name of await readdir(path.join(project, "dist")))
  await cp(path.join(project, "dist", name), path.join(repository, name), {
    recursive: true,
  });
console.log("Prerendered site and synchronized GitHub Pages root.");
