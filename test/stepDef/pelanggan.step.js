const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const Pelanggan = require("../pages/pelanggan.page");
const Logout = require("../pages/logout.page");
const { Before, After } = require('@cucumber/cucumber');

Before(async () => {
    await Page.open('/');
    await LoginPage.login('baemon081@gmail.com','naspad33!');
})

After(async () => {
    await Logout.logout();
});

Given (/^I navigate to the Pelanggan page$/, async () => {
    await Pelanggan.openPelangganPage();
})

When (/^I click on the add button$/, async () => {
    await Pelanggan.klikTambahPelanggan();
})

Then (/^I fill in the customer details with valid data$/, async () => {
    await Pelanggan.addCustomer('Lalisa','085667876545','Solo','VVIP');
})

Then (/^I should see a success message$/, async () => 
{
    await Pelanggan.assertsuccessMessage();
})

Then (/^I should be redirected to the Customer URL$/, async () => 
{
    await Pelanggan.assertCustomerUrl();
})

Then (/^I fill in the customer details except for the name field$/, async () => 
{
    await Pelanggan.addCustomer('','0877665657','Seoul','VIP');
})

Then (/^I should see an error name message$/, async () => 
{
    await Pelanggan.assertphoneErrorMessage('"name" is not allowed to be empty');
})

Then (/^I enter an invalid phone format in the phone field$/, async () => 
{
    await Pelanggan.addCustomer('Jisoo','abc','Seoul','VIP');
})

Then (/^I should see an error phone message$/, async () => 
{
    await Pelanggan.assertEmptyName('"phone" must be a number');
})