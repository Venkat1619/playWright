import { Page } from "@playwright/test"

export class Login {
    constructor(public loginPage: Page) { }
    async enteremail(email: string) {
        await this.loginPage.locator("#input[name='email']").type(email)
    }
    async enterpassword(password: string) {
        await this.loginPage.locator("#input[name='password']").type(password)
    }
    async enterButton() {
        await this.loginPage.click("input[type='submit']");
    }
}