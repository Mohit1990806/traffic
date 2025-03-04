const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

    await page.goto('https://www.zeebiz.com/brand-desk/report-4-reasons-a-joint-life-cover-makes-perfect-financial-sense-343249', { waitUntil: 'networkidle2' });

    console.log("✅ Successfully Bypassed Cloudflare!");

    for (let i = 0; i < 10; i++) {
        await page.evaluate(() => window.scrollBy(0, 500));
        await page.waitForTimeout(2000);
    }

    const links = await page.$$('a');
    if (links.length > 0) {
        await links[Math.floor(Math.random() * links.length)].click();
        await page.waitForTimeout(5000);
    }

    console.log("✅ Human-like interaction done!");

    await browser.close();
})();
