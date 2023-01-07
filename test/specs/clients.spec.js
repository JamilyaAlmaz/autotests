const LoginPage = require('../pageobjects/examples/LoginPage')
const ClientPage = require('../pageobjects/examples/clientPage')


describe('Clients test', () => {
    beforeEach( async()=> {
        await browser.url(browser.options.baseUrl + 'login');
        await LoginPage.doLogin();
    })

    it ('should create new client', async () => {
        await ClientPage.createClientButton.click();
        await browser.pause(5000);
    })
})