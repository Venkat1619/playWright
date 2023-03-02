import { Page } from "@playwright/test"

export class registerpage {

    constructor(public page: Page) { }
    async enterFName(firstname: string) {
        await this.page.locator("#input-firstname").type(firstname);

    }
    async enterLName(lastname: string) {
        await this.page.locator("#input-lastname").type(lastname);

    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").type(email);

    }

    async telephone(phone: string) {
        await this.page.locator("#input-telephone").type(phone);

    }
    async enterPassword(Password: string) {
        await this.page.locator("#input-password").type(Password);

    }
    async enterConfPasssword(cPassword: string) {
        await this.page.locator("#input-confirm").type(cPassword);
    }
    async radioButton() {
        return await this.page.locator("label[for='input-newsletter-no']")

    }
    async clickcheckBox() {
        await this.page.locator("label[for='input-agree']").click();


    }
    async clickcontinueRegister() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.locator("input[value='Continue']").click()

        ])
    }

}