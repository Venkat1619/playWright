import { Page } from "@playwright/test";

 export class viewCart{
    constructor( public page:Page){}

    async viewCartProduct(){
        await this.page.locator("//a[contains(.,'View Cart')]").click()
    }
 }