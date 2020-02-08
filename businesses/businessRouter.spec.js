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

    test("register business user route", async () => {
        const res = await supertest(server)
            .post("/api/businesses/register")
            .send({ 
                username: "skyelar20", 
                password: "abc123" })
                //console.log(res.body)
        const token = res.body.token
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body).toEqual({ token, message: "Welcome skyelar20!" })
    })

    test("check business login status", async () => {
        const res = await supertest(server)
            .post("/api/businesses/login")
            .send({ 
                username: "skyelar20", 
                password: "abc123"
                 })
        //console.log(res)
        const token = res.body.token
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toEqual({ message: "Welcome skyelar20!", token })

    })

    test("check id and name of business user", async () => {   
        const login = await supertest(server)
            .post("/api/businesses/login")
            .send({ 
                username: "sara",
                password: "abc123"
            })
        const res = await supertest(server)
        .get("api/businesses/2")
            .send({
                name: "Panda Express",
                 })
            .set (
                "token", login.body.token
            )
            expect(res.status).toBe(200)
            expect(res.type).toBe(application/json)
            expect(res.body).toBe({ name: "Panda Express" })
    })
})