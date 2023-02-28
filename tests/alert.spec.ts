export { }
const { test, expect } = require("@playwright/test");

test("Alert Testcases", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })
    page.locator("(//button[contains(@class,'btn btn-dark')])[1]").click();
})

// if alert contains ok and cancel

test("two buttons in alert ", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dailog", async (alert) => {
        const alerttext = alert.message();
        console.log(alerttext);
        await alert.dismiss();
    })


    let dismiss = await page.locator("(//button[@type='button'])[2]");
    await dismiss.click();
    console.log("clicked")
    expect(page.locator("id=confirm-demo")).toContainText(" You pressed OK!")

})

test("bootStrap Alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    console.log("clicked")

    await page.click("//button[@data-target='#myModal']");
    console.log("button clicked")
    await page.click("(//button[text()='Save Changes'])[1]")
})


