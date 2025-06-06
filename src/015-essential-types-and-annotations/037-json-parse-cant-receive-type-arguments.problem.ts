import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const parsedData = JSON.parse('{"name": "Alice", "age": 30}') as {
  name: string;
  age: number;
};

type test = Expect<
  Equal<
    typeof parsedData,
    {
      name: string;
      age: number;
    }
  >
>;

it("Should be the correct shape", () => {
  expect(parsedData).toEqual({
    name: "Alice",
    age: 30,
  });
});
