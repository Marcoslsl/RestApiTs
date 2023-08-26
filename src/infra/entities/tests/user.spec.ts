import { expect, test } from "vitest";
import { User } from "../User";

test("creat a room", () => {
  const user = new User();
  user.name = "Jhon Doe";
  user.email = "test@gmail.com";
  user.password = "test";

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual("Jhon Doe");
  expect(user.email).toEqual("test@gmail.com");
  expect(user.password).toEqual("test");
});
