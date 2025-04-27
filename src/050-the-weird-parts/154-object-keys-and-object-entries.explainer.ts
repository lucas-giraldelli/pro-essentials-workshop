import { Equal, Expect } from "@total-typescript/helpers";

interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const usersWithIds: User[] = users.map((user, index) => ({
  ...user,
  id: index,
}));

const userKeys = usersWithIds.map((user) => {
  const keys = Object.keys(user);

  // @ts-expect-error
  type test = Expect<Equal<typeof keys, Array<"id" | "name">>>;
  return keys;
});
