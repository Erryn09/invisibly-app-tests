import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import { landingpage } from "../pageobjects/landingpage.ts";
import { emailpage } from "../pageobjects/emailpage.ts";

const landingPage: landingpage = new landingpage();
const emailPage: emailpage = new emailpage();

Given("Invisibly application is open", async () => {
  await browser.pause(5000);
  await expect(landingPage.logoInvisibly).toExist;
  await expect(landingPage.icoSignIn).toExist;
});

When("I tap on signin icon", async () => {
  await landingPage.navigateToEmailPage();
  // await browser.pause(5000);
  await expect(emailPage.logoInvisibly).toExist;
  await expect(emailPage.btnEmail).toExist;
});

Then("I tap on continue with gmail button", async () => {
  await emailPage.loginWithGmail();
  await browser.pause(5000);
});
