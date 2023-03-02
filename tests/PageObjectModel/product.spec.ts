import { Page } from "@playwright/test";

export class productPage {
    constructor(public page: Page) { }

    async imageHover() {
        await this.page.locator("//a[contains(text(),'LG')]").click();
        await this.page.hover("(//img[@class='lazy-load'])[1]", {
            strict: false
        });
        await this.page.locator("(//button[contains(@class,'btn btn-cart')]//i)[1]").click()

    }

    async toastVisible() {
        const toast = this.page.locator("//a[contains(.,'View Cart')]")
        await toast.waitFor({ state: "visible" });
        return toast
    }

}