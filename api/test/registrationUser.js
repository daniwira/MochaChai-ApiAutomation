const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;
const { USER_REGISTER } = require("../data/userRegister");
const { faker } = require('@faker-js/faker');

const randomEmail = faker.internet.email(); 
const resp = {
    "$id": "1",
    "code": 0,
    "message": "success",
    "data": {
        "$id": "2",
        "Id": 7075,
        "Name": USER_REGISTER.name,
        "Email": randomEmail,
        "Token": "3030401c-c5a5-43c8-8b73-2ab9e6f2ca22"
    }
}

const emailAlready = {
        "$id": "1",
        "code": 1,
        "message": "The email address you have entered is not valid",
        "data": null
}

describe("POST /authaccount/registration", function(){
    it("registration user",async function(){
        const response = await request
            .post("/authaccount/registration")
            .send({
                "name" : USER_REGISTER.name,
                "email" : randomEmail,
                "password" : USER_REGISTER.password
            });

        expect(response.status).to.eql(200);
        expect(resp).to.eql(resp);
    })
    it("email not valid", async function () {
        const response = await request
            .post("/authaccount/registration")
            .send({
                "name" : USER_REGISTER.name,
                "email" : USER_REGISTER.email,
                "password" : USER_REGISTER.password
            });

        expect(response.status).to.eql(400);
        expect(emailAlready).to.eql(emailAlready);
    })
})

