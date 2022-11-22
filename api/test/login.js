const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

const resp = {
        "code": 0,
        "message": "success",
        "data": {
            "Id": 18240,
            "Name": "Developer",
            "Email": "DeveloperQA2@gmail.com",
            "Token": "31dea448-7e16-4b95-a973-10597cb1d14b"
        }
}

const invalidLogin = {
        "code": 1,
        "message": "invalid username or password",
        "data": null
}

describe("POST /authaccount/login", function(){
    it("login user",async function(){
        const response = await request.post("/authaccount/login")
            .send({
                "email":"DeveloperQA2@gmail.com",
                "password":123456
            });

        expect(response.status).to.eql(200);
        expect(resp).to.eql(resp);
    })
    it("login user invalid",async function(){
        const response = await request.post("/authaccount/login")
            .send({
                "email": "94385u4309825@gmail.com",
                "password":123
            });

        expect(response.status).to.eql(200);
        expect(invalidLogin).to.eql(invalidLogin);
    })

})
