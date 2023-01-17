class couponPage {
    get createCouponButton() { return $ ('div.crm-content-head__add button')}
    get createModalPage() { return $ ('mat-dialog-container app-coupon-details')}
    get couponTypeRadio() { return $('mat-dialog-container mat-radio-group mat-radio-button:first-child')}    
    get clientName () {return $('[formcontrolname="ClientFullName"]');}
    get benefitField () {return $('[formcontrolname="Benefit"]');}
    get startDateField () {return $('[formcontrolname="BeginDate"]');}
    get endDateField () {return $('[formcontrolname="EndDate"]');}
    get saveCouponButton () {return $('button.coupons-save__button');}
    
    async open(){ 
        await browser.url(browser.options.baseUrl + 'coupons');
    }
}

module.exports = new couponPage ();