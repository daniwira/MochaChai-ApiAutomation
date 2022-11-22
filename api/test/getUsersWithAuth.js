const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

const AUTH = "d9105a90-9833-45bc-b418-f141b50f3b39"
const token = "d9105a90-9833-45bc-b418-f141b50f3b38"

describe("GET /users?page=1", function(){
    it("returns all users",async function(){
        const response = await request
        .get("/users?page=1")
        .set({Authorization: `Bearer ${AUTH}`})

        expect(response.status).to.eql(200);
        expect(response.body.data.length).to.eql(10);
    })
    it("page not found",async function(){
        const response = await request
        .get("/users?page=50")
        .set({Authorization: `Bearer ${token}`})

        expect(response.status).to.eql(401);
        expect("Invalid Token").to.eql("Invalid Token");
    })
})
