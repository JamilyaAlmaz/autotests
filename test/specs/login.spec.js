const LoginPage = require('../pageobjects/examples/LoginPage')

describe ('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() =>{
        await browser.url('http://167.114.201.175:5000/login/');
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should login', async () => {
        await LoginPage.doLogin();
        await expect(browser).toHaveUrlContaining('clients');
    })

    it('should fail login', async () => {
        await LoginPage.doLogin("Admin", "InvalidPassword");
        await expect(browser).toHaveUrlContaining('login');

    })





        /*
        await LoginPage.passwordField.setValue('Admin@Navi');
        await browser.pause(5000);

        //нажать на кнопку вход
        await LoginPage.submitButton.click();
        await browser.pause(5000);


        await expect(browser).toHaveUrlContaining('clients')
        })
         */


})


        //ввести логин
        //Варианты селекторов на поле Логин:
        //input[name="userName"] 
        //input[type="text"]
        //[type="text"]
        // супер точный путь например: form > div > input[type="text"] 

         //ввести пароль
        //Варианты селекторов на поле Пароль:
        //input[name="password"]
        //input[type="password"]
        //[type="password"]
        //form > div > input[type="password"]