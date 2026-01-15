import { shopItems } from '../src/data/shop';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

const OUTPUT_DIR = path.join(process.cwd(), 'public/img/shop');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchHTML(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        protocol.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function extractOgImage(html: string): string | null {
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
    if (ogImageMatch) return ogImageMatch[1];

    const ogImageAltMatch = html.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i);
    if (ogImageAltMatch) return ogImageAltMatch[1];

    return null;
}

async function downloadImage(url: string, outputPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(outputPath);

        protocol.get(url, (response) => {
            // Handle redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                const redirectUrl = response.headers.location;
                if (redirectUrl) {
                    file.close();
                    fs.unlinkSync(outputPath);
                    return downloadImage(redirectUrl, outputPath).then(resolve).catch(reject);
                }
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlinkSync(outputPath);
            reject(err);
        });
    });
}

async function processItem(item: typeof shopItems[0]) {
    if (item.image || item.autoImage === false) {
        console.log(`⏭️  Skipping ${item.id} (custom image or autoImage disabled)`);
        return;
    }

    const outputPath = path.join(OUTPUT_DIR, `${item.id}.jpg`);

    // Skip if image already exists
    if (fs.existsSync(outputPath)) {
        console.log(`✅ ${item.id} already exists`);
        return;
    }

    try {
        console.log(`🔍 Fetching ${item.link}...`);
        const html = await fetchHTML(item.link);
        const ogImageUrl = extractOgImage(html);

        if (!ogImageUrl) {
            console.warn(`⚠️  No og:image found for ${item.id}`);
            return;
        }

        console.log(`📥 Downloading image for ${item.id}...`);
        await downloadImage(ogImageUrl, outputPath);
        console.log(`✅ Saved ${item.id}.jpg`);
    } catch (error) {
        console.error(`❌ Error processing ${item.id}:`, error);
    }
}

async function main() {
    console.log('🚀 Starting shop image fetcher...\n');

    for (const item of shopItems) {
        await processItem(item);
    }

    console.log('\n✨ Done!');
}

main();
