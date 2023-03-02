import { Page } from "@playwright/test"

export class loginPage {
    constructor(public page: Page) { }

    async login(email,password){
        await this.enteremail(email);
        await this.enterpassword(password);
        await this.enterButton()

    }
    async enteremail(email: string) {
        await this.page.locator("#input-email").type(email)
    }
    async enterpassword(password: string) {
        await this.page.locator("#input-password").type(password)
    }
    async enterButton() {
        await Promise.all([
             this.page.waitForNavigation(),
             this.page.click("input[type='submit']")

        ])
    }
}