class deleteCoupon {
    get threeDots() { return $ ('table.crm-navigator-table tbody tr:first-child td:last-child button')}
    get dropDown() { return $ ('div.mat-menu-panel button.mat-menu-item:last-child')}
    get confirmDelete() { return $ ('app-confirm-dialog mat-dialog-actions button:last-child')}
    
    async open(){ 
        await browser.url(browser.options.baseUrl + 'coupons');
    }
}

module.exports = new deleteCoupon ();