const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.run()
})
describe("business router tests", () => {

    test("welcome route", async () => {
        const res = await supertest(server).get("/")
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Welcome to Replate!")
    })

    test("create business user route", async () => {
        const res = await supertest(server)
            .post("/api/businesses/register")
            .send({ 
                username: "jane", 
                password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8" })
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("jane")
    })

    test("check business login status", async () => {
        const res = await supertest(server)
            .post("/api/businesses/login")
            .send({ 
                username: "nick", 
                password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8" })
        //console.log(res)
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toBe(username, "nick")

    })

    test("check id and name of business user", async () => {         
        const res = await supertest(server)
        .get("api/businesses/login/:id")
            .send({
                id: 2,
                name: "Panda Express",
                 })
            expect(res.status).toBe(200)
            expect(res.type).toBe(application/json)
            expect(res.body).toBe(id, "2", name, "Panda Express" )
    })
})