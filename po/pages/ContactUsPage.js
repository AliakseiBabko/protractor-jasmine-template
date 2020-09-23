'use strict';

const BasePage = require("./BasePage");

class ContactUsPage extends BasePage {
    constructor (){
        super();
        this.CallUsNumber = element(by.css(".full-slim__left__content__title--secondary"));
    }
}

module.exports = ContactUsPage;