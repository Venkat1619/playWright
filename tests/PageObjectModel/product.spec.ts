import { Page } from "@playwright/test";

export class product {
    constructor(public page: Page) { }

    async imageHover() {
        await this.page.hover("(//img[@alt='iMac'])[1]", {
            strict: false
        });
        await this.page.locator("(//i[@class='fas fa-shopping-cart'])[1]").click()
        const waitTime = this.page.locator("#notification-box-top");
        await waitTime.waitFor({ state: "visible" });
        return waitTime
    }
}