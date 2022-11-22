const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

const AUTH = "d9105a90-9833-45bc-b418-f141b50f3b39";

describe("GET /users/11133", function(){
    it("returns user by id",async function(){
        const response = await request
        .get("/users/11133")
        .set({Authorization: `Bearer ${AUTH}`})

        expect(response.status).to.eql(200);
    })
    it("id user not found",async function(){
        const response = await request
        .get("/users/11133878797")
        .set({Authorization: `Bearer ${AUTH}`})

        expect(response.status).to.eql(400);
    })
})
