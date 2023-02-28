export{}

const {chromium,test,expect} = require("@playwright/test")

test("Login  test",async()=>{
    // launching the browser
    const browser= await chromium.launch({
        headless:false
    })

    // by using newContext it will do not carry the cache
    const context = await browser.newContext();

    // open the new Page
    const page= await context.newPage();
    await page.goto('https://leetcode.com/');
    //https://ecommerce-playground.lambdatest.io/
    console.log("url loggedin")

    await page.click("//span[text()='Sign in']");
    console.log("sign in clicked");

    //fill the details
    await page.fill("input#id_login",'Venkat1619');
    await page.fill("input#id_password",'Venkat@1619');

    // await page.click("[text()='Sign In']"); // x path value
    await page.click("text=Sign In") // direct text value unique
    console.log('signed in')
   
    await page.hover("//a[text()='Interview']"); // field hovering
    console.log("interview hovered");
   
    await page.click("(//li[@role='menuitem']//a)[1]"); //click function
    console.log("online assesment menu clicked");
   
    await page.click("(//a[@class='ant-dropdown-link ant-dropdown-trigger'])[3]")
    console.log("user clicked")
   
    await page.click("//div[text()='Points']");
    console.log("points clicked")
   

    // sign out 
    //await page.click("//div[text()='Sign out']"); // x path
    await page.click("text=Sign out"); // direct value 

    console.log('sign out');
 // to close the browser
    await browser.close();

    
})