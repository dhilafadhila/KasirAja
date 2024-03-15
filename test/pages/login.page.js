class LoginPage {
    // Definisikan locator dari elemen
    get emailInput(){
        return $('#email'); //locator field email
    }

    get passwordInput(){
        return $('#password'); //locator field pasword
    }

    get loginButton(){
        return $('.chakra-button'); //locator login button
    }

    get errorMessage(){
        return $('.chakra-alert'); //locator error message
    }

    //Definisikan action/interaksi yang dilakukan pada elemen tersebut 
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMessage.getText();
    }
}

module.exports = new LoginPage();