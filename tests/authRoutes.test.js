const request = require("supertest");
const app = require("../server");

// Signup test
test("POST /signup creates a new user", async () => {
  const response = await request(app).post("/api/signup").send({
    username: "testingUser4",
    password: "testPassword",
    email: "test4@testingemail.com",
  });
  expect(response.statusCode).toBe(201);
});

// Login Test
test("POST /login logs in a user", async () => {
  const response = await request(app).post("/api/login").send({
    username: "testingUser",
    password: "testPassword",
  });
  expect(response.statusCode).toBe(200);
});

//   Get All Recipes
test("GET /recipes fetches all recipes", async () => {
  const response = await request(app).get("/api/recipes");
  expect(response.statusCode).toBe(200);
});

//   Create Recipe
test("POST /recipes creates a new recipe", async () => {
  const response = await request(app)
    .post("/api/recipes")
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGNiNGE2MjQ3ZjFkOGUyNDY3MjM0MWIiLCJpYXQiOjE2OTExMjc2NDksImV4cCI6MTY5MTEzNDg0OX0.fBZoGi-DDB8rYLzoux1xRY8JrFd_SiuKKuq2z4grksc`
    )
    .send({
      name: "Test Recipe",
      effects: ["Glow"],
      ingredients: ["Hylian Rice"],
      imageFilename: "wheatbread.jpg",
      description: "This is a test recipe.",
      userId: "64cb4a6247f1d8e24672341b",
      hearts: 5,
    });
  expect(response.statusCode).toBe(201);
});

//   Update Recipe
test("PUT /recipes/:id updates a recipe", async () => {
  const response = await request(app)
    .put(`/api/recipes/64cc84d66d5382e821608074`)
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGNiNGE2MjQ3ZjFkOGUyNDY3MjM0MWIiLCJpYXQiOjE2OTExMjc2NDksImV4cCI6MTY5MTEzNDg0OX0.fBZoGi-DDB8rYLzoux1xRY8JrFd_SiuKKuq2z4grksc`
    )
    .send({
      name: "Updated Test Recipe",
      effects: ["Restores Stamina"],
      ingredients: ["Star Fragment"],
      imageFilename: "wood.jpg",
      description: "This is an updated test recipe.",
      userId: "64cb4a6247f1d8e24672341b",
      hearts: 5,
    });
  expect(response.statusCode).toBe(200);
});

//   Delete Recipe
test("DELETE /recipes/:id deletes a recipe", async () => {
  const response = await request(app)
    .delete(`/api/recipes/64cc8fac64dbf3e899050003`)
    .set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGNiNGE2MjQ3ZjFkOGUyNDY3MjM0MWIiLCJpYXQiOjE2OTExMjc2NDksImV4cCI6MTY5MTEzNDg0OX0.fBZoGi-DDB8rYLzoux1xRY8JrFd_SiuKKuq2z4grksc`
    );
  expect(response.statusCode).toBe(200);
});
