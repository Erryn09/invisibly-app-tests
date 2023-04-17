export class passwordpage {
  public get txtPassword() {
    return $(
      `//android.widget.EditText[@content-desc="Text Input for Create password"]`
    );
  }

  public get btnPassowrd() {
    return $(`//android.widget.TextView[@content-desc="Continue with Email"]`);
  }

  async enterPassword(password: string) {
    await this.txtPassword.setValue(password);
  }

  async signUp() {
    await this.btnPassowrd.click();
  }
}
