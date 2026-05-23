const fs = require('fs');
const path = require('path');
const { ExifTool } = require('exiftool-vendored');

const exiftool = new ExifTool();

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const JSON_DIR = path.join(PUBLIC_DIR, 'json');

/* -----------------------------
   GET FOLDERS
----------------------------- */
function getFolders() {
    return fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })
        .filter(dirent =>
            dirent.isDirectory() &&
            dirent.name !== 'json'
        )
        .map(dirent => dirent.name);
}

/* -----------------------------
   DATE FORMAT
----------------------------- */
function formatDate(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString);

    return date.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });
}

/* -----------------------------
   EXIF METADATA
----------------------------- */
async function getMetadata(filePath) {
    try {
        const metadata = await exiftool.read(filePath);

        const title = metadata.Title || '';
        const dateOriginal = metadata.DateTimeOriginal || metadata.CreateDate;

        return {
            title,
            date: formatDate(dateOriginal)
        };
    } catch (err) {
        console.error(`EXIF failed for: ${filePath}`, err.message);

        return {
            title: '',
            date: ''
        };
    }
}

/* -----------------------------
   MAIN GENERATION
----------------------------- */
async function generateJson() {
    if (!fs.existsSync(JSON_DIR)) {
        fs.mkdirSync(JSON_DIR, { recursive: true });
    }

    const folders = getFolders();

    for (const folder of folders) {
        const folderPath = path.join(PUBLIC_DIR, folder);
        const outputPath = path.join(JSON_DIR, `${folder}.json`);

        if (!fs.existsSync(folderPath)) {
            console.warn(`Folder not found: ${folderPath}`);
            continue;
        }

        const files = fs.readdirSync(folderPath);

        const images = [];

        for (const file of files) {
            if (!/\.(jpe?g|png|gif|bmp)$/i.test(file)) continue;
            if (/^bg\./i.test(file)) continue;

            const filePath = path.join(folderPath, file);
            const { title, date } = await getMetadata(filePath);

            images.push({
                src: `${folder}/${file}`, // Angular public path
                title,
                date
            });
        }

        // Optional: sort newest first (safe fallback)
        images.sort((a, b) => {
            return new Date(b.date || 0) - new Date(a.date || 0);
        });

        // OVERWRITE FILE (no merging = no stale data)
        fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));

        console.log(`Generated: ${outputPath}`);
    }

    await exiftool.end();
}

/* -----------------------------
   RUN
----------------------------- */
generateJson()
    .then(() => console.log('Gallery JSON generation complete'))
    .catch(err => console.error('Error generating JSON:', err));