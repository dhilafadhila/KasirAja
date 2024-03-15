const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const Logout = require("../pages/logout.page");
const DashboardPage = require("../pages/dashboard.page");

Given (/^I open KasirAja website$/, async () => {
    await Page.open('/');
})

When (/^I login with valid credentials$/, async () => {
    await LoginPage.login('baemon081@gmail.com','naspad33!');
})

Then (/^I should be on the dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl();
})

When (/^I login with invalid email$/, async () => {
    await LoginPage.login('invalid@gmail.com','naspad33!');
})

When (/^I login with invalid password$/, async () => {
    await LoginPage.login('baemon081@gmail.com','invalid_password');
})

Then (/^I log out$/, async () => {
    await Logout.logout();
})

//When (/^I login with (\w+) and (.+)$/, async (email,password) => {
    When(/^I login with (\S+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email,password);
})

Then (/^I should see an error message$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
})


