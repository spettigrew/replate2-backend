const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.run()
})

describe("volunteer router tests", () => {
    test("welcome route", async () => {
        const res = await supertest(server).get("/")
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Welcome to Replate!")
    })

    test("create volunteer user route", async () => {
        const res = await supertest(server)
            .post("/api/volunteers/register")
            .send({ 
                username: "skyelar5", 
                password: "abc123" })
        const token = res.body.token
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body).toEqual({ token, message: "Welcome skyelar5!" })
    })

    test("check volunteer login status", async () => {
        const res = await supertest(server)
            .post("/api/volunteers/login")
            .send({ 
                name: "skyelar5",
                password: "abc123",
            })
        const token = res.body.token
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toEqual({ message: "Welcome skyelar5!", token })
    })

    test("check id and name of volunteer", async () => {
        const login = await supertest(server)
            .post("/api/volunteers/login")
            .send({
                username: "skyelar5",
                password: "abc123"
            })
        const res = await supertest(server)
            .get("api/volunteers/5")
            .send({
                 name: "Sara",
            })
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThan(0)
        expect(res.body).toBe({ name: "Sara" })
    })
})
