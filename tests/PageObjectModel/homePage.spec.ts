import { Page } from "@playwright/test";

export class homePage {
    constructor(public page: Page) { }
    async enterHomeSpecial() {
        await this.page.hover("//span[text()[normalize-space()='Mega Menu']]",{
            strict:false
        })
    }

}