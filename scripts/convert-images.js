const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const images = [
    'hero.png',
    'hero1.png',
    'hero2.png',
    'hero3.png',
    'hero4.png',
    'home-removebg-preview.png',
    'home.png',
];

async function convert() {
    for (const img of images) {
        const src = path.join(publicDir, img);
        if (!fs.existsSync(src)) {
            console.warn('Skipping missing', img);
            continue;
        }

        const name = path.parse(img).name;

        try {
            // AVIF full
            await sharp(src).avif({ quality: 60 }).toFile(path.join(publicDir, `${name}.avif`));
            // WebP full
            await sharp(src).webp({ quality: 70 }).toFile(path.join(publicDir, `${name}.webp`));
            // resized WebP (800)
            await sharp(src).resize(800).webp({ quality: 72 }).toFile(path.join(publicDir, `${name}-800.webp`));
            // resized AVIF (800)
            await sharp(src).resize(800).avif({ quality: 60 }).toFile(path.join(publicDir, `${name}-800.avif`));

            console.log('Converted', img);
        } catch (e) {
            console.error('Failed converting', img, e.message);
        }
    }
}

convert().then(() => console.log('Done')).catch(console.error);
