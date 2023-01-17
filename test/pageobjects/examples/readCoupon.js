class readCoupon {
    get threeDots() { return $ ('table.crm-navigator-table tbody tr:first-child td:last-child button')}
    get dropDown() { return $ ('div.mat-menu-panel button.mat-menu-item:first-child')}
    get closeRead() {return $ ('div.coupons-modal div.coupons-modal__close')}
    
    async open(){ 
        await browser.url(browser.options.baseUrl + 'coupons');
    }
}

module.exports = new readCoupon ();