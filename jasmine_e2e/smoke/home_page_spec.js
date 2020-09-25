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

    describe("IMG HEIGHT VERIFICATION", () => {
        it(`verify that image's height equal to `, async () => {
            const articleImg = await world.HomePage.TechTipsBlockArticlesImg.getSize();                 
            return expect(articleImg.height).toBeLessThan(300);
        });
    });

    describe("FONT SIZE VERIFICATION", () => {
        it(`verify that image's height equal to `, async () => {
            const headerFont = await world.HomePage.DigitalSolutionsHeader.getCssValue('font-style');         
            return expect(headerFont).toBe('normal');
        });
    });

    
    describe("SEARCH FORM VERIFICATION", () => {
        it(`verify that Search form becomes visible after klicking Search icon`, async () => {
            await world.HomePage.Header.SearchButton.click();
            const searchFormSize = await world.HomePage.Header.SearchForm.getSize();
            return expect(searchFormSize.height).toBeGreaterThan(172);
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

describe("BIG DATA SOLUTIONS PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl + '/services/engineering/big-data-solutions');
    });

    describe("Speak with us button is clickable", () => {
        it(`Speak with us button is clickable`, async () => {
            const button = await browser.wait(EC.elementToBeClickable(world.BigDataSolutionsPage.BigDataSpeakWithUsButton), 5000);
            return expect(button).toBe(true);
        });
    });
});
