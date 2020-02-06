const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.run()
})

describe("food request router tests", () => {
    test("welcome route", async () => {
        const res = await supertest(server).get("/")

        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Welcome to Replate!")
    })

    test("create food request route", async () => {
        const res = await supertest(server)
            .post("/api/foodRequest")
            .send({
                type: "Sandwich"
            })
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe(type, "Sandwich")
    })

    test("check id and name of food request", async () => {
        const res = await supertest(server)
            .get("api/foodRequest/:id")
            .send({
                id: 2,
                name: "Salad",
            })
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toBe(id, "2", name, "Salad")
    })
})