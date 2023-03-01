export { }
const { test, expect } = require("@playwright/test");

test("date Picker", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "2023-03-01"
    await page.fill("#birthday", date);
    await page.waitForTimeout(3000)
    await page.fill("//input[@placeholder='Start date']", date)
    await page.fill("//input[@placeholder='End date']", '2023-01-02')

});

