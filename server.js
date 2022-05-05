//Import Express
const express = require('express'); 
const app = express();

//Import Classes
const User = require('./models/User')
const Address = require('./models/Address')
const Company = require('./models/Company')


app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    const newAddress = new Address();
    newCompany.address = newAddress;
    res.json(newCompany);
});

app.get("/api/user/company" , (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    const newAddress = new Address();
    newCompany.address = newAddress;
    res.json({user: newUser, company: newCompany});
});


app.listen(8000, () => console.log("Running server") ); //Running server