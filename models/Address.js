const { faker } = require('@faker-js/faker');

class Address {
    constructor() {
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

module.exports = Address;