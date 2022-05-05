const { faker } = require('@faker-js/faker');

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {};
    }
}

module.exports = Company;