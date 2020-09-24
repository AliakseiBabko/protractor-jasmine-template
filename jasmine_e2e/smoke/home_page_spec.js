const world = require('../../po/world');
const EC = protractor.ExpectedConditions;

describe("HOME PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {
        it(`verify that Home Page url is equal to the ${browser.baseUrl}`, async () => {
            const url = await browser.getCurrentUrl();
            return expect(url).toEqual(browser.baseUrl);
        });

        it(`verify that Home Page title is equal to the 'Enterprise Software Development Company | Exadel'`, async () => {
            const pageTitle = await browser.getTitle();
            return expect(pageTitle).toEqual('Enterprise Software Development Company | Exadel');
        });
    });

    describe("SEARCH FORM VERIFICATION", () => {
        it(`verify that Search form becomes visible after klicking Search icon`, async () => {
            world.HomePage.Header.SearchButton.click();
            //const searchVisibility = await world.HomePage.Header.SearchForm.getSize();            
            //return expect(searchVisibility.height).toBeGreaterThan(0);
            const searchVisibility = await browser.wait(EC.visibilityOf(world.HomePage.Header.SearchForm), 5000);
            return expect(searchVisibility).toBe(true);
        });
    });
});

describe("CONTACT US PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl + '/contact-us');
    });

    describe("Call Us number is valid", () => {
        it(`Call Us number is visible`, async () => {
            const numberVisibility = await browser.wait(EC.visibilityOf(world.ContactUsPage.ContactsBlockPhoneNumber), 5000);
            return expect(numberVisibility).toBe(true);
        });
        it(`Call Us number is equal +1 (866) 843 7411`, async () => {
            const elementNumber = await world.ContactUsPage.ContactsBlockPhoneNumber.getText();
            return expect(elementNumber).toContain('+1 (866)');
        });
    });
});
