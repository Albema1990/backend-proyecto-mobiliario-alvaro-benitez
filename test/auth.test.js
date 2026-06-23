import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";

import app from "../app.js";

describe("Auth API", () => {
  it("debe rechazar credenciales incorrectas", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "fake@test.com",
        password: "123456",
      });

    expect(response.status).to.equal(401);

    expect(response.body.message).to.equal(
      "Credenciales incorrectas"
    );
  });
});