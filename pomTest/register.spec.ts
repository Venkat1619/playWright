import { homePage } from "../tests/PageObjectModel/homePage.spec";
import { loginPage } from "../tests/PageObjectModel/login.spec";
import { productPage } from "../tests/PageObjectModel/product.spec";
import { registerpage } from "../tests/PageObjectModel/register.spec";
import { viewCart } from "../tests/PageObjectModel/viewCart.spec";

export{}
const {expect,test} = require("@playwright/test");
 let email="saivenkat1619@gmail.com"
 let password= "Venkat@1619"

 test.describe("my first POM test",async()=>{
    test("registerpage",async({page,baseURL})=>{
        const register = new registerpage(page);
         await page.goto(`${baseURL}route=account/register`);
         const URL=(`${baseURL}route=account/register`)
         expect(page).toHaveURL(URL);
         await register.enterFName("venkat");
         expect( typeof page.locator("#input-firstname")).toBe("object")
        await register.enterLName("sai");
        await register.enterEmail(email);
        await register.telephone("123456789")
        await register.enterPassword(password);
        await register.enterConfPasssword(password);
        expect ( register.radioButton()).isChecked();
       await register.clickcheckBox();
       await register.clickcontinueRegister();
    })

    test("testcase for Login ",async({page,baseURL})=>{
        const login =  new loginPage(page);
         await page.goto(`${baseURL}route=account/login`);
         const URL=(`${baseURL}route=account/login`)
         expect(page).toHaveURL(URL);
         await login.enteremail(email);
         await login.enterpassword(password);
         await login.enterButton();
         expect(await page.title()).toBe("My Account")
    });
    test("add to cart",async({page ,baseURL})=>{
        const login = new  loginPage(page);
        const home = new homePage(page);
        const product=  new productPage(page);
        const cart = new viewCart(page)
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email,password)
        await home.enterHomeSpecial();
        await product.imageHover();
        await cart.viewCartProduct();
    
    })


 })
 




// test("Home Page",async({page,baseURL})=>{
//     const Home = new homePage(page);
//     await page.goto(`${baseURL}route=common/home`);
//     const URL =(`${baseURL}route=common/home`);
//     expect(page).toHaveURL(URL);
// })

// test('Product Page',async({page,baseURL})=>{
//     const Product= new  productPage(page);
//     await page.goto(`${baseURL}route=common/home`);
//     await Product.imageHover()
// })

