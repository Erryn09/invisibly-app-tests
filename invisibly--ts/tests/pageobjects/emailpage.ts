export class emailpage {
  public get logoInvisibly() {
    return $(
      `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.View`
    );
  }

  public get txtEmail() {
    return $(
      `//android.widget.EditText[@content-desc="Text Input for Email address"]`
    );
  }

  public get btnGmail() {
    return $(`//android.widget.TextView[@content-desc="Continue with Google"]`);
  }

  public get btnEmail() {
    return $(`//android.widget.TextView[@content-desc="Continue with Email"]`);
  }

  async enterEmail(email: string) {
    await this.txtEmail.setValue(email);
  }

  async loginWithGmail() {
    await this.btnGmail.click();
  }

  async navigateToPasswordPage() {
    await this.btnEmail.click();
  }
}
