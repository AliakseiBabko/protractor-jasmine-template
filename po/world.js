'use strict';

const HomePage = require('./pages/HomePage');

class World {
	constructor (){
		this.HomePage = new HomePage();

		this.HomeUrl = `^${browser.baseUrl}$`;
	}
}

module.exports = new World();