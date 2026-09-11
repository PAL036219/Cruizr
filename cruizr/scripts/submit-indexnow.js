import fs from 'fs';
import path from 'path';

const HOST = 'www.cruizr.in';
const KEY = '4f19b88c83a7493798992e105e4612bc';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  const sitemapPath = path.resolve('public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ public/sitemap.xml not found. Run "npm run sitemap" first.');
    return;
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const locMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
  const urlList = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

  if (urlList.length === 0) {
    console.log('⚠️ No URLs found to submit.');
    return;
  }

  console.log(`📡 Submitting ${urlList.length} URLs to IndexNow (Bing, Yahoo, DuckDuckGo, Yandex)...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ Successfully submitted ${urlList.length} URLs to IndexNow! Search engines are now indexing your pages.`);
    } else {
      const errorText = await response.text();
      console.log(`ℹ️ IndexNow response (${response.status}):`, errorText || 'Submitted');
    }
  } catch (err) {
    console.error('❌ Failed to connect to IndexNow API:', err.message);
  }
}

submitIndexNow();
