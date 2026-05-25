import {test, expect} from "@playwright/test";


test("Has title", async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    let title:string = await page.title();
    console.log("title");
    await expect(page).toHaveTitle("Swag Labs");
 
})
