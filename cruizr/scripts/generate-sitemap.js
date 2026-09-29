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
  '/faq',
  // City Pages
  '/motorcycle-app-delhi',
  '/motorcycle-app-bangalore',
  '/motorcycle-app-mumbai',
  '/motorcycle-app-pune',
  '/motorcycle-app-hyderabad',
  '/motorcycle-app-chennai',
  '/motorcycle-app-kolkata',
  // Feature & Intent Pages
  '/group-motorcycle-rides',
  '/motorcycle-ride-planning',
  '/offroad-motorcycle-rides',
  '/motorcycle-clubs',
  '/motorcycle-tracking',
  '/motorcycle-intercom',
  '/motorcycle-safety',
  '/women-motorcycle-riders',
  '/best-motorcycle-app-india',
  '/motorcycle-trip-planner',
  '/ebike-motorcycle-app',
  '/cruizer-cruzr-app',
  '/motorcycle-community-app',
  '/bike-riders-network',
  '/motorcycle-gps-tracker',
  '/motorcycle-rides-near-me',
  '/find-riding-partner',
  '/ladakh-motorcycle-ride',
  // State Pages
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
  '/motorcycle-app-ladakh',
  '/motorcycle-app-arunachal-pradesh',
  '/motorcycle-app-andaman-nicobar',
  // Bike Models Hubs
  '/royal-enfield-himalayan-rides',
  '/royal-enfield-classic-350-rides',
  '/royal-enfield-hunter-350-rides',
  '/royal-enfield-continental-gt-650-rides',
  '/royal-enfield-interceptor-650-rides',
  '/royal-enfield-super-meteor-650-rides',
  '/ktm-duke-390-rides',
  '/ktm-adventure-390-rides',
  '/triumph-speed-400-rides',
  '/triumph-scrambler-400x-rides',
  '/bmw-g310-gs-rides',
  '/hero-xpulse-200-rides',
  '/harley-davidson-x440-rides',
  '/yamaha-r15-rides',
  '/yamaha-mt-15-rides',
  '/kawasaki-ninja-300-rides',
  '/bajaj-dominor-400-rides',
  '/tvs-apache-rr310-rides',
  '/yezdi-adventure-rides',
  '/jawa-42-rides',
  '/suzuki-v-strom-sx-rides',
  '/honda-cb350-rides',
  // Bike Accessories & Gear Guides
  '/motorcycle-intercom-headset-app',
  '/motorcycle-helmet-bluetooth-intercom',
  '/motorcycle-gps-tracker-accessories',
  '/motorcycle-mobile-phone-mount-guide',
  '/motorcycle-riding-gear-accessories',
  '/motorcycle-action-camera-mounts',
  '/motorcycle-saddlebags-luggage-touring',
  '/motorcycle-fog-lights-auxiliary',
  '/motorcycle-crash-guard-accessories',
  '/motorcycle-tyre-inflator-puncture-kit',
  // Bike Apps & Utilities
  '/best-bike-riding-app-india',
  '/free-motorcycle-intercom-app',
  '/motorcycle-group-ride-planner-app',
  '/motorcycle-speedometer-gps-app',
  '/biker-emergency-sos-app',
  '/motorcycle-route-recorder-gps',
  '/bike-club-management-app',
  '/women-biker-safety-riding-app',
  '/motorcycle-trip-cost-calculator'
  
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
