const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.run()
})

// let token = '';
// beforeAll(done => {
//     supertest(server)
//         .post('/api/auth/login')
//         .send({ username: 'test1', password: 'test' })
//         .end((err, res) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 token = res.body.token;
//                 done();
//             }
//         })
// })

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
                username: "sam", 
                password: "$2a$10$zY9/yBf0MYWGGtiEZrFQ8ef1KYLFPAmguEk3tX2NWP1mBhdekcj8" })
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("sam")
    })

    test("check volunteer login status", async () => {
        const res = await supertest(server)
            .post("/api/volunteers/login")
            .send({ name: "Sara" })

        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toBe(name, "Sara")
    })

    test("check id and name of volunteer", async () => {
        const res = await supertest(server)
            .get("api/volunteers/login/:id")
            .send({
                id: 5,
                name: "Sara",
            })
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toBe(id, "5", name, "Sara")
    })
})
