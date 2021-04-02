const { firefox } = require('playwright')

;(async () => {
  const browser = await firefox.launch({
    headless: false,
  })
  const context = await browser.newContext()

  // Open new page
  const page = await context.newPage()

  // Go to https://madreyas.com/
  await page.goto('https://madreyas.com/')

  // Click text="FAQ"
  await page.click('text="FAQ"')
  // assert.equal(page.url(), 'https://madreyas.com/#faq');

  // Close page
  await page.close()

  // ---------------------
  await context.close()
  await browser.close()
})()
