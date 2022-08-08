const request = require("supertest")
const app = require("./app")

describe("Todos api", () => { // not requierd , but preffered as it is makes easier to understand large projects

    it("GET /todos --> array todos", () => {
        return request(app)
        .get("/todos")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    completed: expect.any(Boolean),
                }),
            ])
        )
    })
}) 

    it("GET /todo/:id--> specific todo", () => {
        return request(app)
        .get("/todos/1")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
              expect.objectContaining({
                  name: expect.any(String), 
                  completed: expect.any(Boolean)
              })
        )
    })
})

    it("GET /todo/:id --> 404 if not found", () => {
        return request(app)
        .get("/todos/999999")
        .expect(404)
    })

    it("POST /todos --> create todo", () => {
        return request(app)
        .post("/todos/todo")
        .send({
            name: "do dishes"
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .then((response) => {
            expect(response.body).toEqual(
              expect.objectContaining({
                  name: "do dishes", 
                  completed:false
         })
      )
    })
})

    it ("POST /todos --> validate req.body", () => {
        return request(app)
        .post("/todos")
        .send({
            name: 123
        })
        .expect(422)
    })
    

})