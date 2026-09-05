import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="1200" height="800" fill="none">
  <!-- S (Upper-Left, Crisp Black) -->
  <path
    d="M 122 44 C 116 28, 100 18, 78 18 C 52 18, 34 32, 34 50 C 34 70, 56 79, 80 84 C 106 89, 124 97, 124 114 C 124 130, 106 142, 80 142 C 54 142, 40 132, 34 118"
    stroke="#000000"
    stroke-width="21"
    stroke-linecap="butt"
    stroke-linejoin="round"
    fill="none"
  />
  <!-- Sigmoidal Separator Curve (Vibrant Emerald Green) -->
  <path
    d="M 24 182 L 86 182 C 122 182, 142 142, 158 100 C 174 58, 194 18, 230 18 L 276 18"
    stroke="#00a651"
    stroke-width="20"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
  <!-- ^ (Lower-Right, Crisp Black) -->
  <polygon
    points="210,74 232,74 286,182 261,182 221,106 180,182 155,182"
    fill="#000000"
  />
</svg>`;

const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="1200" height="800" fill="none">
  <!-- S (Upper-Left, Crisp White) -->
  <path
    d="M 122 44 C 116 28, 100 18, 78 18 C 52 18, 34 32, 34 50 C 34 70, 56 79, 80 84 C 106 89, 124 97, 124 114 C 124 130, 106 142, 80 142 C 54 142, 40 132, 34 118"
    stroke="#ffffff"
    stroke-width="21"
    stroke-linecap="butt"
    stroke-linejoin="round"
    fill="none"
  />
  <!-- Sigmoidal Separator Curve (Vibrant Emerald Green) -->
  <path
    d="M 24 182 L 86 182 C 122 182, 142 142, 158 100 C 174 58, 194 18, 230 18 L 276 18"
    stroke="#00a651"
    stroke-width="20"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
  <!-- ^ (Lower-Right, Crisp White) -->
  <polygon
    points="210,74 232,74 286,182 261,182 221,106 180,182 155,182"
    fill="#ffffff"
  />
</svg>`;

async function main() {
  const publicDir = path.resolve('public/assets/images');
  fs.mkdirSync(publicDir, { recursive: true });

  // Save SVGs
  fs.writeFileSync(path.join(publicDir, 'logo_light.svg'), svgLight);
  fs.writeFileSync(path.join(publicDir, 'logo_dark.svg'), svgDark);
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgLight); // default

  // Generate PNGs at high-res (1200x800)
  await sharp(Buffer.from(svgLight))
    .png()
    .toFile(path.join(publicDir, 'logo_light.png'));

  await sharp(Buffer.from(svgDark))
    .png()
    .toFile(path.join(publicDir, 'logo_dark.png'));

  console.log('Successfully generated logo_light.png and logo_dark.png!');
}

main().catch(console.error);
