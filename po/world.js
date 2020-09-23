'use strict';

const HomePage = require('./pages/HomePage');
const ContactUsPage = require('./pages/ContactUsPage');

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.HomeUrl = `^${browser.baseUrl}$`;
		this.ContactUsPage = new ContactUsPage();
		this.ContactUsUrl = `^${browser.contactUsUrl}$`;
	}
}

module.exports = new World();