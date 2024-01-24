// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { app } from "../../src/api";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test("1 is the lowest temperature", ({ given, when, then }) => {
    let input: string;
    let lowestTemperature: string;
    given(
      "an API consumer wants to know the lowest temperature from a list of temperatures",
      () => {
        input = "10, 20, 11, 20, 1";
      }
    );

    when(
      "our API is invoked with a list of temperatures of which 1 is the lowest",
      async () => {
        const response = await request(app)
          .post("/api/getLowestTemperature")
          .send(`input=${input}`);
        lowestTemperature = response.body.lowestTemperature;
      }
    );

    then("the response will contain 1 as the lowest temperature", () => {
      expect(lowestTemperature).toEqual("1");
    });
  });
});
