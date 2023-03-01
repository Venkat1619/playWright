import { Page } from "@playwright/test";

export class homePage {
    constructor(public page: Page) { }
    async enterHomeSpecial() {
        await this.page.locator("//span[text()[normalize-space()='Home']]").click();
    }

}