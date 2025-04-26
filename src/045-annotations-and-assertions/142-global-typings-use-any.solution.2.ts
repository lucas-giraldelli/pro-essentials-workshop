// Uncomment this line to see a stricter JSON.parse!
import "@total-typescript/ts-reset";
import { z } from "zod";

import { expect, it } from "vitest";

const schema = z.object({
  a: z.number(),
  b: z.number(),
});

const getObj = () => {
  const obj = JSON.parse('{ "a": 123, "b": 456 }');

  const zodObj = schema.safeParse(obj);

  if (zodObj.success) {
    return zodObj.data;
  }

  throw new Error("Error parsing object");
};

it("Should return an obj", () => {
  const obj = getObj();

  expect(obj.b).toEqual(456);

  expect(
    // @ts-expect-error c doesn't exist on obj
    obj.c,
  ).toEqual(undefined);
});
