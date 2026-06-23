import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";

import app from "../app.js";

describe("Products API", () => {
  it("debe devolver 401 si no se envía token", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({
        name: "Producto test",
        description: "Descripción test",
        category: "cafe",
        price: 10,
      });

    expect(response.status).to.equal(401);

    expect(response.body.message).to.equal(
      "Falta el token"
    );
  });
});