const axios = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

describe("GET /posts", () => {
  it("fetches all posts", async () => {
    const response = await api.get("/posts");
    expect(response.data.length).toBe(100);
  });
});

describe("POST /posts", () => {
  it("creates a new post", async () => {
    const { data } = await api.post("/posts", {
      userId: 1,
      title: "foo",
      body: "bar",
    });
    expect(data.userId).toEqual(1);
    expect(data.title).toEqual("foo");
    expect(data.body).toEqual("bar");
    expect(typeof data.id).toBe("number");
  });
});

describe("GET /posts/:id", () => {
  it("fetches an existing post", async () => {
    const { data } = await api.get("/posts/5");
    expect(data.userId).toEqual(1);
    expect(data.id).toEqual(5);
    expect(typeof data.title).toBe("string");
    expect(typeof data.body).toBe("string");
  });
});

describe("PUT /posts/:id", () => {
  it("updates an existing post", async () => {
    const { data } = await api.put("/posts/5", {
      userId: 1,
      title: "updatedFoo",
      body: "updatedBar",
    });
    expect(data.userId).toEqual(1);
    expect(data.title).toEqual("updatedFoo");
    expect(data.body).toEqual("updatedBar");
    expect(data.id).toEqual(5);
  });
});

describe("DELETE /posts/:id", () => {
  it("deletes a post based on its id", async () => {
    const { data } = await api.delete("/posts/5");
    expect(data).toEqual({});
  });
});
