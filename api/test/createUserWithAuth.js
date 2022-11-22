const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;
const { USER_DATA } = require("../data/userData");
const { faker } = require('@faker-js/faker');

const randomEmail = faker.internet.email();

const resp = {
    "$id": "1",
    "id": 7076,
    "name": USER_DATA.name,
    "email": randomEmail,
    "profilepicture": "https://www.adequatetravel.com/ATMultimedia//Images/userimageicon.png",
    "location": USER_DATA.location,
    "createdat": "2021-10-14T12:05:59.7235182Z"
}

const emailAlready = {
        "$id": "1",
        "code": 1,
        "message": "The email address you have entered is already registered",
        "data": null
}

const AUTH = "d9105a90-9833-45bc-b418-f141b50f3b39";

describe("POST /users", function(){
    it("registration user",async function(){
        const response = await request
            .post("/users")
            .set({Authorization: `Bearer ${AUTH}`})
            .send({
                "name" : USER_DATA.name,
                "email" : randomEmail,
                "location" : USER_DATA.location
            });

        expect(response.status).to.eql(201);
        expect(resp).to.eql(resp);
    })
    it("email already", async function () {
        const response = await request
            .post("/users")
            .set({Authorization: `Bearer ${AUTH}`})
            .send({
                "name" : USER_DATA.name,
                "email" : USER_DATA.email,
                "location" : USER_DATA.location
            });

        expect(response.status).to.eql(400);
        expect(emailAlready).to.eql(emailAlready);
    })
})

