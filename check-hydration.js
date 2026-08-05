const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newContext();
  const p = await page.newPage();

  p.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`[${msg.type()}] ${msg.text()}`);
    }
  });

  p.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  await p.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await browser.close();
})();
