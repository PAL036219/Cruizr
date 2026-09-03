import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.cruizr.in';

// List your static routes here
const staticPages = [
  '/',
  '/features',
  '/about',
  '/contact',
  '/pricing',
  '/feedback',
  '/roadmap',
  '/privacy',
  '/terms',
  '/delete-account'
];

async function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  const today = new Date().toISOString().split('T')[0];

  // Add static pages
  for (const page of staticPages) {
    xml += `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>\n`;
  }

  // Add blog posts dynamically
  const blogDir = path.resolve('src/content/blog');
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '');
        xml += `  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
      }
    }
  }

  xml += `</urlset>`;

  const outputPath = path.resolve('public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`✅ Sitemap successfully generated with dynamic blog posts!`);
}

generateSitemap();
