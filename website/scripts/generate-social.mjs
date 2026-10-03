// Exact, code-generated sharing graphic. Install sharp separately to regenerate.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#121b22"/><path d="M80 80h1040" stroke="#35434e"/><text x="80" y="142" font-family="Arial,sans-serif" font-size="23" letter-spacing="4" fill="#a4caf1">CYBERSECURITY · VANCOUVER, BC</text><text x="75" y="280" font-family="Arial,sans-serif" font-weight="bold" font-size="86" letter-spacing="-3" fill="#f1f2ee">Payton Murdoch<tspan fill="#a4caf1">.</tspan></text><text x="80" y="362" font-family="Arial,sans-serif" font-size="43" fill="#f1f2ee">Security operations. Data protection.</text><text x="80" y="439" font-family="Arial,sans-serif" font-size="25" fill="#b2bdc7">MEng · BSc · ISC2 Certified in Cybersecurity</text><path d="M80 501h1040" stroke="#35434e"/><text x="80" y="553" font-family="Arial,sans-serif" font-size="21" fill="#a4caf1">plmurdoch.github.io</text><text x="1040" y="553" font-family="Arial,sans-serif" font-size="34" font-weight="bold" fill="#f1f2ee">PM<tspan fill="#a4caf1">.</tspan></text></svg>`;
await sharp(Buffer.from(svg))
  .png()
  .toFile(
    fileURLToPath(new URL("../public/social-preview.png", import.meta.url)),
  );
