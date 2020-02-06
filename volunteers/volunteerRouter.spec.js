const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.truncate()
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

test("welcome route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to Replate!")
})

test("create volunteer user route", async () => {
    const res = await supertest(server)
        .post("/api/volunteers/register")
        .send({ username: "sam", password: "abc123" })

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.username).toBe("sam")
})

test("check volunteer login status", async () => {
    const res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "joseph" })

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body).toBe(username, "joseph")

})