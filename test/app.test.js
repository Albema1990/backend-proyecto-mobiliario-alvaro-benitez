import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";

import app from "../app.js";

describe("App", () => {
  it("debe responder en la ruta principal", async () => {
    const res = await request(app).get("/");

    expect(res.status).to.equal(200);

    expect(res.body.message).to.equal(
      "Bienvenidos a la API de Hygge Coffee"
    );
  });
});