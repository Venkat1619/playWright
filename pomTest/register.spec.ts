import { registerpage } from "../tests/PageObjectModel/register.spec";

export{}
const {expect,test} = require("@playwright/test");
 let email="abc@gmail.com"
 let password= "abc@123"
 
test("registerpage",async({page,baseURL})=>{
    const register = new registerpage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFName("venkat");
    await register.enterLName("sai");
    await register.enterEmail(email);
    await register.telephone("123456789")
    await register.enterPassword(password);
    await register.enterConfPasssword(password);
    expect ( register.radioButton()).isChecked();
   await register.clickcheckBox();
   await register.clickcontinueRegister();
   

})