const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.truncate()
})

test("welcome route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to Replate!")
})

test("create business user route", async () => {
    const res = await supertest(server)
        .post("/api/businesses/register")
        .send({ username: "sam", password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8" })

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.username).toBe("sam")
})

test("check business login status", async () => {
    const res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "nick", password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8" })
    //console.log(res)
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body).toBe(username, "nick")

})