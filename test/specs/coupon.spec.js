const couponPage = require('../pageobjects/examples/couponPage')
const loginPage = require('../pageobjects/examples/LoginPage')
const readCoupon = require('../pageobjects/examples/readCoupon')
const deleteCoupon = require('../pageobjects/examples/deleteCoupon')

describe('Coupons test', () => {
    beforeEach( async()=> {
        await loginPage.open();
        await loginPage.doLogin();
        await loginPage.createClientButton.waitForDisplayed({timeout: 5000});
    })
    it ('should create new coupon', async () => {
        await couponPage.open();
        await couponPage.createCouponButton.click();
        await couponPage.createModalPage.waitForDisplayed({timeout: 5000});
        await couponPage.couponTypeRadio.click();
        await couponPage.clientName.setValue('Jamilya');
        await browser.pause(1000);
        await couponPage.benefitField.setValue(20);
        await browser.pause(1000);
        await couponPage.startDateField.setValue("17/01/2023");
        await browser.pause(1000);
        await couponPage.endDateField.setValue("20/01/2023");
        await browser.pause(1000);
        await couponPage.saveCouponButton.click();
        await browser.pause(1000);
    })

    xit ('should read coupon', async () => {
        await couponPage.open();
        await readCoupon.threeDots.click();
        await readCoupon.dropDown.click();
        await browser.pause(1000);
        await readCoupon.closeRead.click();
    })

    xit ('should delete coupon', async () => {
        await couponPage.open();
        await deleteCoupon.threeDots.click();
        await deleteCoupon.dropDown.click();
        await browser.pause(1000);
        await deleteCoupon.confirmDelete.click();        
    })
})