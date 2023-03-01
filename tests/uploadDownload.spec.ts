export { }
const { test, expect } = require("@playwright/test");

test("download a file", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    const inputPage = page.locator("#textbox");
    await inputPage.type("hello");
    await page.click("#create");
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")

    ])
    const fileName = await download[0].suggestedFilename();
    await download[0].saveAs(fileName);

    await page.waitForTimeout(3000)
});

test("upload a file", async ({ page }) => {
    await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html");
    await page.setInputFiles("input[type='file']", 'tests/sample.txt');
    await page.waitForTimeout(3000);
})

test("upload multiple files", async ({ page }) => {
    await page.goto("http://autopract.com/selenium/upload1/");
    await page.locator("//input[@type='file']").setInputFiles(["tests/sample.txt", "tests/example.txt"]);
    await page.locator("(//span[text()='Start'])[1]").click();
    await page.locator("(//span[text()='Start'])[2]").click();
    await page.waitForTimeout(3000);
})