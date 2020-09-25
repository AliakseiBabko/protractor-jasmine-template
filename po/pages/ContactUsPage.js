'use strict';

const BasePage = require("./BasePage");

class ContactUsPage extends BasePage {
    constructor (){
        super();
        this.ContactsBlock = element(by.css('.et_pb_section_0'));
        this.ContactsBlockPhoneNumber = this.ContactsBlock.element(by.css('.full-slim__left__content__title--secondary'));
        this.ContactFormBlock = element(by.css('.et_pb_section_1'));
        this.LocationsBlock = element(by.css('#locations'));
    }
}

module.exports = ContactUsPage;