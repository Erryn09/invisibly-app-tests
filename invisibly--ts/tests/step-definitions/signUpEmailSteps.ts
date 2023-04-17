import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import { landingpage } from "../pageobjects/landingpage.ts";
import { emailpage } from "../pageobjects/emailpage.ts";
import { passwordpage } from "../pageobjects/passwordpage.ts";

const landingPage: landingpage = new landingpage();
const emailPage: emailpage = new emailpage();
const passwordPage: passwordpage = new passwordpage();

Given("I open the Invisibly application", async () => {
  await browser.pause(5000);
  await expect(landingPage.logoInvisibly).toExist;
  await expect(landingPage.icoSignIn).toExist;
});

Then("I click on the signin icon", async () => {
  await landingPage.navigateToEmailPage();
  // await browser.pause(5000);
  await expect(emailPage.logoInvisibly).toExist;
  await expect(emailPage.btnEmail).toExist;
});

When("I enter my email address", async () => {
  // await browser.pause(5000);
  await emailPage.enterEmail("johnsnow@gmail.com");
});

Then("I click on the continue with email button", async () => {
  await emailPage.navigateToPasswordPage();
  await expect(passwordPage.btnPassowrd).toExist;
});

When("I enter my password", async () => {
  await passwordPage.enterPassword("y0ukn0wn0th1ng");
  await browser.pause(5000);
});

// Then("I click on the continue with email button", async () => {
//   await passwordPage.signUp();
// });

// Then("I am signed up", async()=>{
//   "I am signed up"
// });
