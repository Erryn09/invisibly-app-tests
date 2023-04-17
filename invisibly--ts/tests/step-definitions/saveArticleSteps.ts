import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import { landingpage } from "../pageobjects/landingpage.ts";
import { articlepage } from "../pageobjects/articlepage.ts";

const landingPage: landingpage = new landingpage();
const articlePage: articlepage = new articlepage();

Given("I open the Invisibly landing page", async () => {
  await browser.pause(5000);
  await expect(landingPage.logoInvisibly).toExist;
  await expect(landingPage.icoSignIn).toExist;
});

Then("I tap on an article", async () => {
  await browser.pause(5000);

  await landingPage.openArticle();
  await expect(articlePage.logoArticle).toExist;
  await expect(articlePage.btnSave).toExist;
});

When("I tap on the save icon", async () => {
  await articlePage.saveArticle();
  await browser.pause(5000);
});

Then("I have saved an article", async () => {});
