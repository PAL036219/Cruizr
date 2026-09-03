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
  '/delete-account',
  '/motorcycle-ride-planning',
  '/offroad-motorcycle-rides',
  '/motorcycle-clubs',
  '/motorcycle-tracking',
  '/motorcycle-intercom',
  '/motorcycle-safety',
  '/women-motorcycle-riders',
  '/motorcycle-community-app',
  '/bike-riders-network',
  '/motorcycle-gps-tracker',
  '/motorcycle-app-maharashtra',
  '/motorcycle-app-karnataka',
  '/motorcycle-app-tamil-nadu',
  '/motorcycle-app-goa',
  '/motorcycle-app-kerala',
  '/motorcycle-app-telangana',
  '/motorcycle-app-andhra-pradesh',
  '/motorcycle-app-gujarat',
  '/motorcycle-app-rajasthan',
  '/motorcycle-app-west-bengal',
  '/motorcycle-app-madhya-pradesh',
  '/motorcycle-app-uttar-pradesh',
  '/motorcycle-app-punjab',
  '/motorcycle-app-haryana',
  '/motorcycle-app-bihar',
  '/motorcycle-app-odisha',
  '/motorcycle-app-assam',
  '/motorcycle-app-himachal-pradesh',
  '/motorcycle-app-uttarakhand',
  '/motorcycle-app-jharkhand',
  '/motorcycle-app-chhattisgarh',
  '/motorcycle-app-jammu-kashmir',
  '/motorcycle-app-ladakh'
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
