// CODE

const userIds = new Set<number>();

// TESTS

userIds.add(1);
userIds.add(2);
userIds.add(3);

// @ts-expect-error
userIds.add("123");
// @ts-expect-error
userIds.add({ name: "Max" });
