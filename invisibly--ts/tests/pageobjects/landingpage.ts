export class landingpage {
  public get logoInvisibly() {
    return $(
      `//android.view.ViewGroup[@content-desc="Screen Home"]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup`
    );
  }

  public get icoSignIn() {
    return $(
      `//android.view.ViewGroup[@content-desc="Screen Home"]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ImageView`
    );
  }

  public get lnkArticle() {
    return $(
      `//android.widget.ScrollView[@content-desc="Scroll View Containing Opportunity cards"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup`
    );
  }
  async navigateToEmailPage() {
    await this.icoSignIn.click();
  }

  async openArticle() {
    await this.lnkArticle.click();
  }
}
