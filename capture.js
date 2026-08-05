const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newContext();
  const p = await page.newPage();

  // Wait for network to be idle
  await p.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Mobile
  await p.setViewportSize({ width: 375, height: 812 });
  await p.waitForTimeout(2000); // let animations settle
  await p.screenshot({ path: '/Users/bhagyashree/.gemini/antigravity-ide/brain/127ce2bc-98ac-40f4-b99f-26860c7a04c8/mobile.png', fullPage: true });

  // Tablet
  await p.setViewportSize({ width: 768, height: 1024 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: '/Users/bhagyashree/.gemini/antigravity-ide/brain/127ce2bc-98ac-40f4-b99f-26860c7a04c8/tablet.png', fullPage: true });

  // Desktop
  await p.setViewportSize({ width: 1440, height: 900 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: '/Users/bhagyashree/.gemini/antigravity-ide/brain/127ce2bc-98ac-40f4-b99f-26860c7a04c8/desktop.png', fullPage: true });

  await browser.close();
})();
