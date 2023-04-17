import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import { landingpage } from "../pageobjects/landingpage.ts";
import { articlepage } from "../pageobjects/articlepage.ts";

const landingPage: landingpage = new landingpage();
const articlePage: articlepage = new articlepage();

Given("I am on the Invisibly landing page", async () => {
  await browser.pause(5000);
  await expect(landingPage.logoInvisibly).toExist;
  await expect(landingPage.icoSignIn).toExist;
});

Then("I click on an article", async () => {
  await browser.pause(6000);
  await landingPage.openArticle();
  await expect(articlePage.logoArticle).toExist;
  await expect(articlePage.btnLike).toExist;
});

When("I click on the like icon", async () => {
  await articlePage.likeArticle();
  await browser.pause(5000);
});

Then("I have liked an article", async () => {
  await expect(articlePage.btnLike).toBeSelected;
  await expect(articlePage.btnLike).toBeChecked;
});
