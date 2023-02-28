const { test, expect } = require("@playwright/test");

test("Assertions Test", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    console.log("URL clicked");
    const messageInput = page.locator("input#user-message");
    //  console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

    // we can check actual  input values
    console.log("before ", await messageInput.inputValue());

    // we can enter the input value
    const enteredValue = await messageInput.type("hello world");
    console.log("after", await messageInput.inputValue());
})

//sum of numbers
test("Sum of Numbers", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1 = page.locator("#sum1");
    const sum2 = page.locator("#sum2");
    const btnValue = await page.locator("//button[text()='Get values']")

    await sum1.type("12");
    await sum2.type("8");
    await btnValue.click();
    const result = page.locator("(//div[@id='user-message'])[2]");
    console.log(await result.textContent())
    const exResult = await result.textContent()
    expect(result).toHaveText("" + exResult);
})

//Testing for checkBox 
test("checkBox Testing", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    console.log("URL clicked");
    const checkBox = page.locator("id=isAgeSelected");
    expect(checkBox).not.toBeChecked();
    await checkBox.click();
    //    console.log("checked")
    expect(checkBox).toBeChecked();
})

test("checkBox button", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const uncheck = page.locator("//input[@value='check all']");
    //    expect(uncheck).not.toBeChecked();
    const result = await uncheck.click();


})