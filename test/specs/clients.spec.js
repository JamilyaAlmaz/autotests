const LoginPage = require('../pageobjects/examples/LoginPage')
const ClientPage = require('../pageobjects/examples/clientPage')


describe('Clients test', () => {
    beforeEach( async()=> {
        await LoginPage.open();
        await LoginPage.doLogin();
        await LoginPage.open();
    })

    it ('should create new client', async () => {
        //уже тут шаги открытия формы клиента и заполнения 
        //первый способ
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия");
        await ClientPage.firstNameField.setValue("Тестовое имя");

        //второй способ
        let testingUser = {
            surname: "Тестовая фамилия"
        }

        await ClientPage.fillForm(testingUser)
        //окончание второго способа

        await browser.pause(5000);
    })

    it('remain test cases', async () => {

    })
})