export{}
const {test,expect} = require("@playwright/test");

test("dropDown Testing",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{
        //we can represent by three ways
        
       // label:"Wednesday"
       //value:"Wednesday"
       index:2
    })
    console.log("dropDown clicked");

   const result= await page.locator("//p[@class='selected-value text-size-14']");
   console.log( await result.textContent());
   const exResult =await result.textContent() ;
   expect(result).toHaveText(""+ exResult)  
    await page.waitForTimeout(5000)
});
 //multi selection
test("for multi Selection",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#multi-select",[
        {
            label:"Texas"
        },{
            value:"New York"
        },{
             index :2
        }
    ]);
    await page.waitForTimeout(3000)

});

