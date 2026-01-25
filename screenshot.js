const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file:///Users/junhua/Workspace/ForthAI/Tech/forth-ai-homepage/index.html');
  await page.waitForTimeout(2000);
  
  // Get the safety card element and screenshot it
  const safetyCard = await page.locator('.area').nth(1);
  await safetyCard.screenshot({ path: 'screenshot-safety-card.png' });
  console.log('Captured safety card');
  await browser.close();
}

takeScreenshots();
