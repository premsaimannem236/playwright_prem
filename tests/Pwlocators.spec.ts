import {test,expect,Locator} from "@playwright/test";
test ("verify Playwright Locators", async({page})=>{
await page.goto("https://demo.nopcommerce.com/");
const image=page.getByAltText("nopCommerce demo store");
await expect(image).toBeVisible();

})